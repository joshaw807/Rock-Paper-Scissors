





function getComputerChoice(){
    let comChoice = 0; //computer choice
    choice = Math.floor(Math.random() * (3 - 1 + 1) + 1);
    console.log(choice);
    return comChoice
}


function getHumanChoice(){
    let humChoice = 0; //human choice
    humChoice = prompt("Enter your choice, Rock, Paper, Scissors");
    console.log(humChoice);

    return humChoice;
}


getHumanChoice();