import { isSameDay } from 'date-fns';

const dates = Array.from({ length: 100000 }, (_, i) => new Date(Date.now() + i * 86400000));
const selectedDate = new Date();

console.log("Measuring 100,000 iterations...");

console.time('Inside loop (Baseline)');
dates.forEach(date => {
  const isToday = isSameDay(date, new Date());
});
console.timeEnd('Inside loop (Baseline)');

console.time('Outside loop (Optimized)');
const today = new Date();
dates.forEach(date => {
  const isToday = isSameDay(date, today);
});
console.timeEnd('Outside loop (Optimized)');
