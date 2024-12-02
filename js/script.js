// console.log("Hello World")

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * options.length)];
}

// console.log(getComputerChoice())

function getHumanChoice() {
    return prompt("What is your choise?").toLowerCase();
}

// console.log(getHumanChoice())

let computerScore = 0;
let humanScore = 0;

function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    // console.log(humanChoice, computerChoice);

    if (humanChoice === computerChoice) {
        console.log("It's a draw!");
    } else if (humanChoice === "rock") {
        if (computerChoice === "scissors") {
            humanScore += 1;
            console.log("You won! Rock beats Scissors");
        } else {
            computerScore += 1;
            console.log("You lose! Paper beats Rock");
        } 
    } else if (humanChoice === "scissors") {
        if (computerChoice === "paper") {
            humanScore += 1;
            console.log("You won! Scissors beats Paper");
        } else {
            computerScore += 1;
            console.log("You lose! Rock beats Scissors");
        } 
    } else if (humanChoice === "paper") {
        if (computerChoice === "rock") {
            humanScore += 1;
            console.log("You won! Paper beats Rock");
        } else {
            computerScore += 1;
            console.log("You lose! Scissors beats Paper");
        } 
    }
    
}

// console.log(playRound());

function playGame() {
    for(let i = 0; i <= 5; i++) {
        playRound();
    }

    if (humanScore > computerScore) {
        console.log(`Your score is ${humanScore}:${computerScore}. You won!`);
    } else if (humanScore < computerScore) {
        console.log(`Your score is ${humanScore}:${computerScore}. You lose!`);
    } else {
        console.log(`Your score is ${humanScore}:${computerScore}. It's a draw!`);
    }
}

console.log(playGame());