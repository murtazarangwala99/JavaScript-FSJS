//  13. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
const prompt = require("prompt-sync")();
let base = prompt("Enter Base of Triangle: ");
let height = prompt("Enter height of Triangle: ");
let area = 0.5 * base * height;
console.log(`Base: ${base} and Height: ${height}, Area is ${area}`);

/*
Notes: Install propt-sync using below commnand
        npm install prompt-sync
        # or
        yarn add prompt-sync
Then use this command to Use Prompt in Node Environment.
        const prompt = require("prompt-sync")();
*/
