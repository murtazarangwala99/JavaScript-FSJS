// 22. Write a program which tells the number of days in a month.
// let myDate = new Date(2022, 1, 0);
function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
console.log(`January has : ${daysInMonth(1, 2022)}`);
console.log(`Fabruary has : ${daysInMonth(2, 2022)}`);
console.log(`March has : ${daysInMonth(3, 2022)}`);
console.log(`April has : ${daysInMonth(4, 2022)}`);
console.log(`May has : ${daysInMonth(5, 2022)}`);
console.log(`June has : ${daysInMonth(6, 2022)}`);
console.log(`July has : ${daysInMonth(7, 2022)}`);
console.log(`August : ${daysInMonth(8, 2022)}`);
console.log(`September has : ${daysInMonth(9, 2022)}`);
console.log(`October has : ${daysInMonth(10, 2022)}`);
console.log(`November has : ${daysInMonth(11, 2022)}`);
console.log(`December has : ${daysInMonth(12, 2022)}`);
