let appleProducts = [];
document.querySelectorAll(".as-imagegrid-item-title").forEach((ele) => {
  appleProducts.push(ele.innerText.replace("\nSupport", ""));
});
console.log(appleProducts);
