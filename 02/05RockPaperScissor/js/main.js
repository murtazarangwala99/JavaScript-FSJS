// getting all the DOM elements
let userScore = document.querySelector("#userScoreVal");
let compScore = document.querySelector("#compScoreVal");
let resultUser = document.getElementById("result-user-stat");
let resultComp = document.getElementById("result-comp-stat");
let resultFinal = document.getElementById("result-final-stat");
let rock = document.querySelector("#r");
let paper = document.querySelector("#p");
let scissors = document.querySelector("#s");
// Declare Score Count
let compScoreCount = 0;
let userScoreCount = 0;

// variable for user and computer for choicing r, p, s
let userChoice = null;
let compChoice = null;

// Choices Array
const choice = document.querySelectorAll(".choice");

// Event Listener for each choices by user
choice.forEach((choiceElement) => {
  choiceElement.addEventListener("click", () => {
    const answerElement = document.getElementById("answer");
    if (answerElement) {
      answerElement.remove();
    }
    // getting computer choice
    computerChoice();
    // getting user choice
    let userMsg;
    userChoice = choiceElement.getAttribute("id");
    if (userChoice == "r") {
      userMsg = "User: Rock";
    } else if (userChoice == "p") {
      userMsg = "User: Paper";
    } else if (userChoice == "s") {
      userMsg = "User: Scissor";
    }
    resultUser.innerHTML = userMsg;
    // getting results
    const result = findAnswer(userChoice, compChoice);
    resultFinal.innerHTML = "Winner: " + result;
  });
});

let computerChoice = () => {
  const compRandom = Math.floor(Math.random() * 3) + 1;
  let compMsg;

  if (compRandom === 1) {
    compMsg = "Computer: Rock";
    resultComp.innerHTML = compMsg;
    return (compChoice = "r");
  } else if (compRandom === 2) {
    compMsg = "Computer: Paper";
    resultComp.innerHTML = compMsg;
    return (compChoice = "p");
  } else if (compRandom === 3) {
    compMsg = "Computer: Scissor";
    resultComp.innerHTML = compMsg;
    return (compChoice = "s");
  }
};

const computerWon = () => {
  compScore.innerText = Number(compScore.innerText) + 1;
  return "Computer Won";
};
const userWon = () => {
  userScore.innerText = Number(userScore.innerText) + 1;
  return "User Won";
};

// Main Logic For Winning and Draw
const findAnswer = (userChoice, computerChoice) => {
  if (
    (userChoice === "r" && computerChoice === "r") ||
    (userChoice === "p" && computerChoice === "p") ||
    (userChoice === "s" && computerChoice === "s")
  ) {
    return "Match Draw";
  }
  if (userChoice === "r" && computerChoice === "p") {
    return computerWon();
  } else if (userChoice === "r" && computerChoice === "s") {
    return userWon();
  } else if (userChoice === "p" && computerChoice === "s") {
    return computerWon();
  } else if (userChoice === "p" && computerChoice === "r") {
    return userWon();
  } else if (userChoice === "s" && computerChoice === "r") {
    return computerWon();
  } else if (userChoice === "s" && computerChoice === "p") {
    return userWon();
  }
};
