// 27. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

// Sort the array and find the min and max age
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
console.log(ages.sort());
console.log("Minimum in Array: ");
console.log(ages.sort()[0]);
console.log("Maximum in Array: ");
console.log(ages.sort()[ages.length - 1]);
// Find the median age(one middle item or two middle items divided by two)
console.log("Median Age : ");
let mid1 = ages[ages.length / 2];
let mid2 = ages[Math.ceil((ages.length + 1) / 2)];
let median = (mid1 + mid2) / 2;
console.log(median);
// Find the average age(all items divided by number of items)
console.log("Average:");
let avg = 0;
for (let i = 0; i < ages.length; i++) {
  avg = avg + ages[i];
}
let average = avg / 10;
console.log(average);
// Find the range of the ages(max minus min)
console.log("Range: ");
let range = ages.sort()[ages.length - 1] - ages.sort()[0];
console.log(range);
// Compare the value of (min - average) and (max - average), use abs() method
console.log("Min - Average");
console.log(Math.abs(ages.sort()[0] - average));
console.log("Max - Average");
console.log(Math.abs(ages.sort()[ages.length - 1] - average));
