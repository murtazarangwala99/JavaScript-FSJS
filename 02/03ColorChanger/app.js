let btn = document.querySelector("#button");
let can = document.querySelector("#canvas");
function changeColor() {
  if (can.style.backgroundColor == "red") {
    can.style.backgroundColor = "Blue";
  } else {
    can.style.backgroundColor = "Red";
  }
}
btn.addEventListener("click", changeColor);
