let arr = document.querySelectorAll("#SIvCob a");
for (let i = 0; i < arr.length; i++) {
  if (i % 2 == 0) {
    arr[i].remove();
  }
}
console.log(arr);
