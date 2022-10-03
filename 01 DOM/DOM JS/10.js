// querySelector, mouseover, click eventListener,  callback function, style,
let btnCode = document.querySelector(".btn-cta-big .login-btn-text");
function fnBtn() {
  btnCode.style.backgroundColor = "Red";
}
btnCode.addEventListener("mouseover", fnBtn);
