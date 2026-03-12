const { performance } = require('perf_hooks');

const entries = Array.from({ length: 1000 }).map((_, i) => ({
  takenAt: new Date(Date.now() - Math.random() * 10000000000).toISOString()
}));

const RUNS = 10000;

let baselineTime = 0;
for (let i = 0; i < RUNS; i++) {
  const start = performance.now();
  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth();
  const todayDate = today.getDate();
  entries.filter(e => {
    const d = new Date(e.takenAt);
    return d.getFullYear() === todayYear &&
           d.getMonth() === todayMonth &&
           d.getDate() === todayDate;
  }).length;
  baselineTime += performance.now() - start;
}
baselineTime /= RUNS;

let optimizedTime = 0;
for (let i = 0; i < RUNS; i++) {
  const start = performance.now();
  // Get 'YYYY-MM-DD' from the local timezone string to match local day matching.
  // This is a fast way to match local date if we know takenAt is ISO, but wait takenAt is ISO so it's UTC time.
  // isSameDay uses local time! So we need to match local time.
  // Let's stick with the new Date() logic or see if string match is correct for local time.

  // Date.toISOString() is UTC, but the takenAt is an ISO string.
  // isSameDay(new Date(entry.takenAt), selectedDate)
  // takenAt is stored as "2023-10-05T14:48:00.000Z", which is UTC.
  // new Date(takenAt) creates a local Date object.
  // isSameDay checks if local dates are the same.

  // Actually, we can just benchmark string parsing versus Date creation.
  const today = new Date();
  entries.filter(e => {
    const d = new Date(e.takenAt);
    return d.getFullYear() === today.getFullYear() &&
           d.getMonth() === today.getMonth() &&
           d.getDate() === today.getDate();
  }).length;
  optimizedTime += performance.now() - start;
}
optimizedTime /= RUNS;

console.log(`Baseline Time: ${baselineTime.toFixed(4)} ms`);
console.log(`Optimized Time: ${optimizedTime.toFixed(4)} ms`);
console.log(`Improvement: ${((baselineTime - optimizedTime) / baselineTime * 100).toFixed(2)}%`);
