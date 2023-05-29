const options = ["rock", "paper", "scissors"]

const playerButtons = document.querySelectorAll('.playerImgs')

function getComputerChoice() {
    //todo - update the DOM with computer selection
    const choice = options[Math.floor(Math.random() * options.length)]
    return choice;
}

function getPlayerChoice() {
    let validatedInput = false;
    while (validatedInput == false) {
        const choice = prompt("What is your guess? (Rock, Paper, or Scissors");
        if (choice == null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase()
        if (options.includes(choiceInLower)) {
            validatedInput = true;
            return choiceInLower;
        } 
    }
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    }
    else if (
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ){
        return "Player";
    }
    else {
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie") {
        return "It's a tie!"
    }
    else if (result == "Player") {
        return `You Win! ${playerSelection} beats ${computerSelection}`
    }
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (i = 0; i < 5; i ++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("-------------")
        if (checkWinner(playerSelection, computerSelection) == "Player") {
            playerScore ++;
        }
        else if (checkWinner(playerSelection, computerSelection) == "Computer") {
            computerScore ++;
        }
    }
    console.log("Game Over!")
    if (playerScore > computerScore) {
        console.log("You won the game!")
    }
    else if (playerScore < computerScore) {
        console.log("The computer won the game!")
    }
    else {
        console.log("The game was a tie!")
    }
}

// game()




