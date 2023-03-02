// 19. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
const prompt = require("prompt-sync")();
let num = prompt("Enter number to Check Even Number: ");
if (num % 2 == 0) {
  console.log("Even Number");
} else {
  console.log("Odd Number");
}
