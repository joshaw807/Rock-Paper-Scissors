let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let comChoice = 0; //computer choice
  comChoice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  console.log(comChoice);
  return comChoice;
}

function getHumanChoice() {
  let humChoice = 0; //human choice
  humChoice = prompt("Enter your choice, Rock, Paper, Scissors");

  return humChoice;
}

function playRound(humanChoice, computerChoice) {
  let human = humanChoice.toLowerCase();

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
  console.log("word "+humanChoice);
  console.log("numb " + human);

  if (human === 1 && computerChoice === 2) {
    console.log("Human wins, Rock beats scissors");
  } else if (human === 2 && computerChoice === 3) {
    console.log("Human wins, Scissors beats paper");
  } else if (human === 3 && computerChoice === 1) {
    console.log("Human wins, Paper beats rock");
  } else if (human === 1 && computerChoice === 3) {
    console.log("You lose, Rock beats scissors");
  } else if (human === 2 && computerChoice === 1) {
    console.log("You lose, Scissors beats paper");
  } else if (human === 3 && computerChoice === 2) {
    console.log("you lose, Paper beats rock");
  } else if (human === computerChoice) {
    console.log("Tie");
  } else {
    console.log("You lose, ");
  }
  return score;
}



function playGame(){

let score = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
score = playRound(humanSelection,computerSelection);  



}
