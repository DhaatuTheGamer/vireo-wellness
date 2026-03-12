import { isSameDay } from 'date-fns';

const dateStr = '2023-10-05T14:48:00.000Z'; // UTC time
const dateObj = new Date(dateStr); // Local time object

const today = new Date(); // Local time today

// See if `dateStr.startsWith(today.toISOString().split('T')[0])` is equivalent to `isSameDay(new Date(dateStr), today)`
// `today.toISOString()` is UTC string.
// `isSameDay` uses local time. So they are not strictly equivalent.
// e.g. if I am in +0200, 2023-10-05T23:00:00.000Z is 2023-10-06 local time.
// isSameDay against 2023-10-06 local time will be true.
// But startswith UTC will match 2023-10-05, which is false.

const dateStr1 = '2023-10-05T23:00:00.000Z';
const dateObj1 = new Date(dateStr1);

console.log("Local time:", dateObj1.toString());
console.log("UTC part:", dateStr1.split('T')[0]);

// To safely string match, we can just extract YYYY-MM-DD from the local time
const getLocalString = (d: Date) => `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
console.log("Local string:", getLocalString(dateObj1));
