// 23. Write a program which tells the number of days in a month, now consider leap year.
// Here we Take 2016 as a Leap Year
function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
console.log(`January has : ${daysInMonth(1, 2016)}`);
console.log(`Fabruary has : ${daysInMonth(2, 2016)}`);
console.log(`March has : ${daysInMonth(3, 2016)}`);
console.log(`April has : ${daysInMonth(4, 2016)}`);
console.log(`May has : ${daysInMonth(5, 2016)}`);
console.log(`June has : ${daysInMonth(6, 2016)}`);
console.log(`July has : ${daysInMonth(7, 2016)}`);
console.log(`August : ${daysInMonth(8, 2016)}`);
console.log(`September has : ${daysInMonth(9, 2016)}`);
console.log(`October has : ${daysInMonth(10, 2016)}`);
console.log(`November has : ${daysInMonth(11, 2016)}`);
console.log(`December has : ${daysInMonth(12, 2016)}`);
