// 35. Write a functions which checks if all items are unique in the array.
let arr1 = [
  "india",
  "murtuza",
  "rangwala",
  "gujarat",
  "coder",
  "coder",
  "india",
];
let unique = () => {
  let arr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr.includes(arr1[i])) {
      arr.push(arr1[i]);
    }
  }
  return console.log(arr);
};
unique();
