// 12. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.
let now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());

// Extra
// console.log(now);
// console.log(now.toDateString());
// console.log(now.toString());
console.log("--------------");
let janOne = new Date("January 01, 1970");
// console.log(janOne.getSeconds());
// let output = janOne.getSeconds() + now.getSeconds();
// console.log(`$Output is : ${output}`);
console.log(janOne.getTime());
let output = janOne.getTime() + now.getTime();
console.log(output);
