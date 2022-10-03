const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};
// Copy to ClipBoard
clipboardEl.addEventListener("click", () => {
  if (resultEl.innerText.length > 0) {
    navigator.clipboard.writeText(resultEl.innerText);
    alert("Password Copied:  " + resultEl.innerText);
  } else {
    alert("Please First Generate Password!");
  }
});
// Adding Event Listeners
generateEl.addEventListener("click", () => {
  generatePassword(
    randomFunc.lower,
    randomFunc.upper,
    randomFunc.number,
    randomFunc.symbol,
    lengthEl.value
  );
});
const number = "0123456789";
let lower = "abcdefghijklmnopqrstuvxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const special = "~!@#$%^&*()_+=-";
// Main function
function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = [];
  if (length >= 7 && length <= 20) {
    for (let i = 0; i < length; i++) {
      generatedPassword.push(
        getRandomLower(),
        getRandomUpper(),
        getRandomNumber(),
        getRandomSymbol()
      );
      const password = generatedPassword.join("").slice(0, length);
      resultEl.textContent = password;
    }
  } else {
    resultEl.textContent = "Selection Length(7-20)";
  }
}

// ----------------------- Functions For Event Listeners --------------------
function getRandomLower() {
  if (lowercaseEl.checked) {
    let randpomLower = lower[Math.floor(Math.random() * lower.length)];
    return randpomLower;
  }
}
function getRandomUpper() {
  if (uppercaseEl.checked) {
    let randomUpper = upper[Math.floor(Math.random() * upper.length)];
    return randomUpper;
  }
}
function getRandomNumber() {
  if (numbersEl.checked) {
    let randomNumber = number[Math.floor(Math.random() * number.length)];
    return randomNumber;
  }
}
function getRandomSymbol() {
  if (symbolsEl.checked) {
    let randomSymbol = special[Math.floor(Math.random() * special.length)];
    return randomSymbol;
  }
}

// Get length
let length = document.querySelector("#length").value; // getting Length
let newLength = Number(length);

const getRandom = () => {};
