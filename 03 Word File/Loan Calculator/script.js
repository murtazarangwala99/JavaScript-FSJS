/* Loan Calculator (Home, Car, Bike Personal):
- It will calculate the monthly emi of home/car/Bike by taking the total amount, months to repay and the rate of interest.
 */
let loanAmount = document.querySelector("#loanAmount");
let months = document.querySelector("#months");
let interestRate = document.querySelector("#interestRate");
let emi = document.querySelector("#emi");
let input = document.querySelectorAll(".input");
let calculate = document.querySelector("#calculate");
let reset = document.querySelector("#reset");

function calculateEmi() {
  if (
    loanAmount.value.length > 0 &&
    months.value.length > 0 &&
    interestRate.value.length > 0
  ) {
    const interest = Math.round(
      (loanAmount.value * (interestRate.value * 0.01)) / months.value
    );
    const total = (loanAmount.value / months.value + interest).toFixed(2);
    emi.innerText = "Rs. " + total;
  } else {
    alert("Please fill all the Textbox!");
  }
}
function resetBox() {
  if (
    loanAmount.value.length > 0 ||
    months.value.length > 0 ||
    interestRate.value.length > 0
  ) {
    loanAmount.value = "";
    months.value = "";
    interestRate.value = "";
  }
}
calculate.addEventListener("click", calculateEmi);
reset.addEventListener("click", resetBox);
