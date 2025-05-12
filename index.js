let humanScore = 0;
let computerScore = 0;

const rockBtn = document.createElement("button");
rockBtn.textContent = "Rock";
const paperBtn = document.createElement("button");
paperBtn.textContent = "Paper";
const scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "Scissors";

const body = document.querySelector(".container");

body.append(rockBtn, paperBtn, scissorsBtn);

 rockBtn.addEventListener('click', () =>{
    playRound("rock");
  
  });

  paperBtn.addEventListener('click', () =>{
    playRound("paper");
    
  });

  scissorsBtn.addEventListener('click', () =>{
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
   score = 0;

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
    console.log("Human wins, Rock beats scissors");
    score = 1;
  } else if (human === 2 && computerChoice === 3) {
    console.log("Human wins, Scissors beats paper");
    score = 1;
  } else if (human === 3 && computerChoice === 1) {
    console.log("Human wins, Paper beats rock");
    score = 1;
  } else if (human === 1 && computerChoice === 3) {
    console.log("You lose, Paper beats rock");
  } else if (human === 2 && computerChoice === 1) {
    console.log("You lose, Rock beats scissors");
  } else if (human === 3 && computerChoice === 2) {
    console.log("you lose, Scissors beats paper");
  } else if (human === computerChoice) {
    console.log("Tie");
    score = 2;
  }

  return score;
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








