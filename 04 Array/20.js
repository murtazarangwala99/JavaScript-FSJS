// 20. Write a code which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-79, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F
const prompt = require("prompt-sync")();
let score = prompt("Enter Scores: ");
if (score >= 80 && score <= 100) {
  console.log("A");
} else if (score >= 70 && score <= 79) {
  console.log("B");
} else if (score >= 60 && score <= 69) {
  console.log("C");
} else if (score >= 50 && score <= 59) {
  console.log("D");
} else if (score >= 0 && score <= 49) {
  console.log("F");
} else {
  console.log("Enter Valid Scores");
}
