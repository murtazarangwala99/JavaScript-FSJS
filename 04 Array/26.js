// 26. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
let countries = [
  "India",
  "Shrilanka",
  "Bangladesh",
  //   "Ethiopia",
  "Usa",
  "England",
];
let findEthiopia = countries.indexOf("Ethiopia") > -1;
if (findEthiopia === false) {
  countries.push("Ethiopia");
  console.log(countries);
} else {
  console.log("Already Ethiopia is In Array");
}
