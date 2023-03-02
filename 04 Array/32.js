// 32. Array Questions
//     - Extract all the countries contain the word 'land' from the countries array and print it as array
//     - Find the country containing the hightest number of characters in the countries array
//     - Extract all the countries containing only four characters from the countries array and print it as array
//     - Extract all the countries containing two or more words from the countries array and print it as array
//     - Reverse the countries array and capitalize each country and stored it as an array

// 1. Extract all the countries contain the word 'land' from the countries array and print it as array
const countryList = [
  "afghanistan",
  "algeria",
  "Argentina",
  "Australia",
  "Bangladesh",
  "Bermuda",
  "Bhutan",
  "Brazil",
  "Canada",
  "Cayman Islands (the)",
  "Chad",
  "China",
  "Christmas Island",
  "Colombia",
  "Cuba",
  "Denmark",
  "Egypt",
  "El Salvador",
  "Ethiopia",
  "Finland",
  "France",
  "Germany",
  "Ghana",
  "Greece",
  "Greenland",
  "Iceland",
  "India",
  "Indonesia",
  "Iran (Islamic Republic of)",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Kenya",
  "Kuwait",
  "Maldives",
  "Mexico",
  "Myanmar",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nigeria",
  "Pakistan",
  "Qatar",
  "Russian Federation (the)",
  "Saudi Arabia",
  "Singapore",
  "South Africa",
  "Sri Lanka",
  "Sweden",
  "Switzerland",
  "Thailand",
  "Turkey",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom of Great Britain and Northern Ireland (the)",
  "United States of America",
  "Viet Nam",
  "Western Sahara",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];
let newArray = [];
for (let i = 0; i < countryList.length; i++) {
  if (countryList[i].includes("land")) {
    newArray.push(countryList[i]);
  }
}
// console.log(newArray.length);
console.log(newArray);
console.log(
  `Countries Name Contains Land in their Names Count is: ${newArray.length}`
);

// 2. Find the country containing the hightest number of characters in the countries array
let longest_coutry_in_array = countryList.sort(function (a, b) {
  return b.length - a.length;
})[0];
console.log(longest_coutry_in_array);
// 3. Extract all the countries containing only four characters from the countries array and print it as array
let four_character_country = [];
for (let i = 0; i < countryList.length; i++) {
  if (countryList[i].length == 4) {
    four_character_country.push(countryList[i]);
  }
}
console.log(
  `Courtries with Four Character in their Name: ${four_character_country}`
);
// 4. Extract all the countries containing two or more words from the countries array and print it as array
let two_or_more_array = [];
for (i = 0; i < countryList.length; i++) {
  if (countryList[i].split(" ").length > 2) {
    two_or_more_array.push(countryList[i]);
  }
}
console.log(two_or_more_array);
// 5. Reverse the countries array and capitalize each country and stored it as an array
console.log(`Reverse Array`);
// console.log(countryList.reverse());
let cap_rev_arr = [];
function capitalizeWords() {
  return countryList.map((element) => {
    // return console.log(element.charAt(0).toUpperCase() + element.slice(1).toLowerCase());
    return cap_rev_arr.push(
      element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()
    );
  });
}
capitalizeWords();
console.log(cap_rev_arr.reverse());
