let humanScore = 0;
let computerScore = 0;

const rockBtn = document.createElement("button");
rockBtn.textContent = "Rock";
const paperBtn = document.createElement("button");
paperBtn.textContent = "Paper";
const scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "Scissors";

const scoreBoard = document.createElement("div");

const body = document.querySelector(".container");

body.append(rockBtn, paperBtn, scissorsBtn, scoreBoard);

rockBtn.addEventListener("click", () => {
  playRound("rock");
});

paperBtn.addEventListener("click", () => {
  playRound("paper");
});

scissorsBtn.addEventListener("click", () => {
  playRound("scissors");
});

function getComputerChoice() {
  let comChoice = 0; //computer choice
  comChoice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  return comChoice;
}

// function getHumanChoice() {
//   let humChoice = 0; //human choice
//   humChoice = prompt("Enter your choice, Rock, Paper, Scissors");

//   return humChoice;
// }

function playRound(human) {
  // let human = humanChoice.toLowerCase();
  let computerChoice = getComputerChoice();
  let score = 0;
  let winner = "";
  switch (human) {
    case "rock":
      human = 1;
      break;
    case "scissors":
      human = 2;
      break;
    case "paper":
      human = 3;
      break;
    default:
      break;
  }

  if (human === 1 && computerChoice === 2) {
    winner = "Human wins, Rock beats scissors";
    console.log("Human wins, Rock beats scissors");
    score = 1;
  } else if (human === 2 && computerChoice === 3) {
    console.log("Human wins, Scissors beats paper");
    winner = "Human wins, Scissors beats paper";
    score = 1;
  } else if (human === 3 && computerChoice === 1) {
    console.log("Human wins, Paper beats rock");
    winner = "Human wins, Paper beats rock";
    score = 1;
  } else if (human === 1 && computerChoice === 3) {
    winner = "You lose, Paper beats rock";
    console.log("You lose, Paper beats rock");
  } else if (human === 2 && computerChoice === 1) {
    winner = "You lose, Rock beats scissors";
    console.log("You lose, Rock beats scissors");
  } else if (human === 3 && computerChoice === 2) {
    winner = "you lose, Scissors beats paper";
    console.log("you lose, Scissors beats paper");
  } else if (human === computerChoice) {
    winner = "Tie";
    console.log("Tie");
    score = 2;
  }
  showScore(winner);
  return score;
}

function showScore(winner) {
  scoreBoard.textContent = winner;
}

function playGame() {
  let score = 0;

  //const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  //score = playRound(humanSelection, computerSelection);

  if (score === 1) {
    humanScore++;
  } else if (score === 2) {
  } else {
    computerScore++;
  }

  console.log(
    "Human score: " + humanScore + "\nComputer Score: " + computerScore
  );

  score = 0;

  if (humanScore > computerScore) {
    console.log("Yay you won!");
  } else if (humanScore === computerScore) {
    console.log("you tied? how");
  } else {
    console.log("you lost.");
  }
}
