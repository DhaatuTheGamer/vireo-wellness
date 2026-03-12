import { performance } from 'perf_hooks';
import { isSameDay } from 'date-fns';

const entries = Array.from({ length: 1000 }).map((_, i) => ({
  takenAt: new Date(Date.now() - Math.random() * 10000000000).toISOString()
}));

const RUNS = 10000;

// Baseline
let baselineTime = 0;
for (let i = 0; i < RUNS; i++) {
  const start = performance.now();
  const today = new Date();
  entries.filter(e => isSameDay(new Date(e.takenAt), today)).length;
  baselineTime += performance.now() - start;
}
baselineTime /= RUNS;

// String match optimized
let optimizedTime = 0;
for (let i = 0; i < RUNS; i++) {
  const start = performance.now();
  const todayStr = new Date().toISOString().split('T')[0];
  entries.filter(e => e.takenAt.startsWith(todayStr)).length;
  optimizedTime += performance.now() - start;
}
optimizedTime /= RUNS;

console.log(`Baseline Time: ${baselineTime.toFixed(4)} ms`);
console.log(`Optimized Time: ${optimizedTime.toFixed(4)} ms`);
console.log(`Improvement: ${((baselineTime - optimizedTime) / baselineTime * 100).toFixed(2)}%`);
