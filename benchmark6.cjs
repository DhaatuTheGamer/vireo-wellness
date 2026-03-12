const { performance } = require('perf_hooks');

const entries = Array.from({ length: 1000 }).map((_, i) => ({
  takenAt: new Date(Date.now() - Math.random() * 10000000000).toISOString()
}));

const RUNS = 10000;

let baselineTime = 0;
for (let i = 0; i < RUNS; i++) {
  const start = performance.now();
  const today = new Date();
  entries.filter(e => {
    const d = new Date(e.takenAt);
    return d.getFullYear() === today.getFullYear() &&
           d.getMonth() === today.getMonth() &&
           d.getDate() === today.getDate();
  }).length;
  baselineTime += performance.now() - start;
}
baselineTime /= RUNS;

let optimizedTime = 0;
for (let i = 0; i < RUNS; i++) {
  const start = performance.now();
  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth();
  const todayDate = today.getDate();

  let count = 0;
  for (let j = 0; j < entries.length; j++) {
    const d = new Date(entries[j].takenAt);
    if (d.getFullYear() === todayYear &&
        d.getMonth() === todayMonth &&
        d.getDate() === todayDate) {
      count++;
    }
  }
  optimizedTime += performance.now() - start;
}
optimizedTime /= RUNS;

console.log(`Baseline Time: ${baselineTime.toFixed(4)} ms`);
console.log(`Optimized Time: ${optimizedTime.toFixed(4)} ms`);
console.log(`Improvement: ${((baselineTime - optimizedTime) / baselineTime * 100).toFixed(2)}%`);
