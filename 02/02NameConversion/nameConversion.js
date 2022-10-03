const input = document.querySelector("#text");
const convert = document.querySelector("#convert-btn");
// Selecting Every Element using querySelectors
const camelCaseOutput = document.querySelector("#camel-case");
const pascelCaseOutput = document.querySelector("#pascal-case");
const snakeCaseOutput = document.querySelector("#snake-case");
const screamingSnakeCaseOutput = document.querySelector(
  "#screaming-snake-case"
);
const kebabCaseOutput = document.querySelector("#kebab-case");
const screamingKebabCaseOutput = document.querySelector(
  "#screaming-kebab-case"
);
//  Adding Event Listener to each on of the Case
input.addEventListener("input", (element) => {
  let text = element.target.value;
  //   Camel Case Event Listener
  const camelCase = makeCamelCase(text);
  camelCaseOutput.innerText = camelCase;

  //   Pascel Case Event Listenet
  const pascelCase = makePascelCase(text);
  pascelCaseOutput.innerText = pascelCase;

  //   Snake CAse Event Listener
  const snaleCase = makeSnakeCase(text);
  snakeCaseOutput.innerText = snaleCase;

  //   Screaming Snake Case Event Listener
  const screamingSnakeCase = makeScreamingSnakeCase(text);
  screamingSnakeCaseOutput.innerText = screamingSnakeCase;

  // Kebab Case Event Listener
  const kebabCase = makeKebabCase(text);
  kebabCaseOutput.innerText = kebabCase;

  // Screaming Kebab Case Event Listener
  const screamingKebabCase = makeScreamingKebabCase(text);
  screamingKebabCaseOutput.innerText = screamingKebabCase;
});
// ---------------------------Functions-------------------------------------
// Camel Case Function
const makeCamelCase = (text) => {
  const wordArray = text.split(" ");
  const array = wordArray.map((word, i) => {
    if (i === 0) {
      return (word = word.toLowerCase());
    } else {
      const firstLetter = word.slice(0, 1);
      const restLetter = word.slice(1);
      return firstLetter.toUpperCase() + restLetter;
    }
  });
  return array.join("");
};
// Pascel Case Function
const makePascelCase = (text) => {
  const wordArray = text.split(" ");
  const array = wordArray.map((word, i) => {
    const firstLetter = word.slice(0, 1);
    const restLetter = word.slice(1);
    return firstLetter.toUpperCase() + restLetter;
  });
  return array.join("");
};
// Snake Case Function
const makeSnakeCase = (text) => {
  const wordArray = text.split(" ");
  return wordArray.join("_");
};
// Screaming Snake Case Function
const makeScreamingSnakeCase = (text) => {
  const wordArray = text.toUpperCase().split(" ");
  return wordArray.join("_");
};
// Kebab Case Function
const makeKebabCase = (text) => {
  const wordArray = text.split(" ");
  return wordArray.join("-");
};
// Screaming Kebab Case
const makeScreamingKebabCase = (text) => {
  const wordArray = text.toUpperCase().split(" ");
  return wordArray.join("-");
};
