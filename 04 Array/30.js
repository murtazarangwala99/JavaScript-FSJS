// 30. Write a script which generates a random hexadecimal number.
function generateRandomHexCode() {
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
  let hexCode = "#";
  while (hexCode.length < 7) {
    hexCode = hexCode + digits[Math.round(Math.random() * digits.length)];
  }
  console.log(hexCode);
  return hexCode;
}
generateRandomHexCode();
//  Other Way
function randomHexCode() {
  let hexCode = "#";
  while (hexCode.length < 7) {
    hexCode = hexCode + Math.round(Math.random() * 15).toString(16);
  }
  return console.log(hexCode);
}
randomHexCode();
