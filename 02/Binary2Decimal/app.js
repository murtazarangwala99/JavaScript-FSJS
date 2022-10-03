const formEle = document.querySelector(".container");
let binaryNum = document.querySelector("#binary");
let btn = document.querySelector(".btn");
let result = document.querySelector(".result");
let resultSpan = document.querySelector(".resultspan");
// This function will check number is binary or not
function checkBinaryNum(num) {
  let temp = Number(num);
  for (let i = 0; i <= num.length; i++) {
    if (temp % 10 !== 0) {
      if (temp % 10 !== 1) {
        return false;
      }
    }
    temp = Math.floor(temp / 10);
  }
  return true;
}

// This function will return a digit
function returnDigit(num) {
  return num % 10;
}

// This function will covert Binary To Decimal
function covertBinaryToDecimal() {
  let num = binaryNum.value;
  let sum = 0;
  if (checkBinaryNum(num)) {
    let n = Number(num);
    for (let i = 0; i < num.length; i++) {
      sum += returnDigit(n) * Math.pow(2, i);
      n = Math.floor(n / 10);
    }
    resultSpan.textContent = sum;
  } else {
    formEle.reset();
    resultSpan.textContent = sum = 0;
    alert("Please enter valid binary number!");
  }
}

btn.addEventListener("click", (element) => {
  element.preventDefault();
  covertBinaryToDecimal();
});
