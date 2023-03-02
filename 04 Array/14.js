// 14. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
// const prompt = require("prompt-sync")();
let x1, y1;
let x2, y2;
function slope(x1, x2, y1, y2) {
  return (y2 - y1) / (x2 - x1);
}
console.log(slope(2, 6, 2, 10));
