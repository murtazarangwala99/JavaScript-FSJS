// Whenever a user wants to store something in the clipboard, he enters in the textbox  and on clicking on submit button, it will save in the clipboard.
let text = document.querySelector("#text");
let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  if (text.value.length > 0) {
    navigator.clipboard.writeText(text.value);
    alert("Text Copied:  " + text.value);
  } else {
    alert("Please Enter something in Text Area!");
  }
});
