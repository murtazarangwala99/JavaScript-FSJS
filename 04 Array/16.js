// 16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
const prompt = require("prompt-sync")();
let radius = prompt("Enter Radius of Circle: ");
let area = Math.PI * radius * radius;
console.log(`Area of Circle with Radius ${radius} is : ${area}`);
let circumference = 2 * Math.PI * radius;
console.log(
  `Circumference of Circle With Radius ${radius} is : ${circumference}`
);
