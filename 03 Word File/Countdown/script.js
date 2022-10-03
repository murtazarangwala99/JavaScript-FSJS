const countdown = document.querySelector("#countdown");
const input = document.querySelector("#input");
const startBtn = document.querySelector("#start-btn");

startBtn.addEventListener("click", () => {
  if (input.value == "0" || input.value == "") {
    alert("Please Enter Number ! ");
  } else {
    let ourValue = input.value;
    countdown.innerText = ourValue;
    setInterval(() => {
      if (ourValue > 0) {
        ourValue = ourValue - 1;
        countdown.innerText = ourValue;
        // console.log(ourValue);
      }
    }, 1000);
  }
});
