import { performance } from 'perf_hooks';
import { isSameDay } from 'date-fns';

const entries = Array.from({ length: 1000 }).map((_, i) => ({
  takenAt: new Date(Date.now() - Math.random() * 10000000000).toISOString()
}));

const RUNS = 10000;

let baselineTime = 0;
for (let i = 0; i < RUNS; i++) {
  const start = performance.now();
  const today = new Date();
  entries.filter(e => isSameDay(new Date(e.takenAt), today)).length;
  baselineTime += performance.now() - start;
}
baselineTime /= RUNS;

let optimizedTime = 0;
for (let i = 0; i < RUNS; i++) {
  const start = performance.now();
  const today = new Date();
  const y = today.getFullYear();
  const m = today.getMonth();
  const d = today.getDate();
  entries.filter(e => {
    const dt = new Date(e.takenAt);
    return dt.getFullYear() === y && dt.getMonth() === m && dt.getDate() === d;
  }).length;
  optimizedTime += performance.now() - start;
}
optimizedTime /= RUNS;

console.log(`Baseline Time: ${baselineTime.toFixed(4)} ms`);
console.log(`Optimized Time: ${optimizedTime.toFixed(4)} ms`);
console.log(`Improvement: ${((baselineTime - optimizedTime) / baselineTime * 100).toFixed(2)}%`);
