/* 5. Palindrome Checker Game:
- Users can enter text or numbers and check whether the entered value is palindrome or not by clicking on the check button.
 */
let input = document.querySelector("#input");
let btn = document.querySelector("#btn");
let output = document.querySelector("#output");
// It split given input and reverse it.
function reverseString(input) {
  var splitString = input.value.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
}
// it check wheather given input is same as reverse one
function checkPalindrome() {
  if (input.value.length > 0) {
    if (input.value === reverseString(input)) {
      output.style.color = "green";
      output.innerText = input.value + " is Palindrome!";
    } else {
      output.style.color = "red";
      output.innerText = input.value + " is Not Palindrome!";
    }
  } else {
    alert("Please Enter something to Check!");
  }
}
btn.addEventListener("click", checkPalindrome);
