/* 4. Word Count App:
 - Build a word count app which only calculates the number of characters given by the user.
 */
let result = document.querySelector("#result");
let string = document.querySelector("#string");
let count = 0;

string.addEventListener("keyup", (element) => {
  let string = element.target.value;
  let repString = string.replace(/\s/g, "");
  result.textContent = repString.length;
});
