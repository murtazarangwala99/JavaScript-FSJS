// Users can select if they want dark or light mode on selection immediate selection must occur.
let btn = document.querySelector("#btn");
let main = document.querySelector("#main");
let heading = document.querySelector("#heading");

function changeColor() {
  if (main.style.backgroundColor == "") {
    main.style.backgroundColor = "black";
    heading.style.color = "white";
    btn.innerText = "Light Mode";
    btn.style.color = "white";
    body.style.transition = "2s";
  } else if (main.style.backgroundColor == "white") {
    main.style.backgroundColor = "black";
    heading.style.color = "white";
    btn.innerText = "Light Mode";
    btn.style.color = "white";
    body.style.transition = "2s";
  } else {
    main.style.backgroundColor = "white";
    heading.style.color = "black";
    btn.innerText = "Dark Mode";
    btn.style.color = "black";
    body.style.transition = "3.5s";
  }
}
btn.addEventListener("click", changeColor);
