// 17. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm
let date = new Date();
const datevalue = [date.getFullYear(), date.getMonth() + 1, date.getDate()];
const datevalues = [date.getDate(), date.getMonth() + 1, date.getFullYear()];
const dateTime = [date.getHours(), date.getMinutes(), date.getSeconds()];
// YYYY-MM-DD HH:mm
console.log(datevalue.join("-").concat(" ").concat(dateTime.join(":")));
// DD-MM-YYYY HH:mm
console.log(datevalues.join("-").concat(" ").concat(dateTime.join(":")));
// DD/MM/YYYY HH:mm
console.log(datevalues.join("/").concat(" ").concat(dateTime.join(":")));
