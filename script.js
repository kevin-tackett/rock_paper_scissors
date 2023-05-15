function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"]
    let randomChoice = Math.floor(Math.random() * choice.length)
    let computerChoice = choice[randomChoice]
    return computerChoice;
}

function playerChoice() {
    let input = prompt("What is your guess? (Rock, Paper, or Scissors");
    // while (input !== "rock" || "paper" || "scissors") {
    //     input = prompt("That is not a valid answer, please choose Rock, Paper, or Scissors");
    // }
    input = input.toLowerCase();
    return input;
}

const playerSelection = playerChoice()
const computerSelection = getComputerChoice()

console.log('You chose' + " " + playerSelection)
console.log('The computer chose' + " " + computerSelection)
// playerScore = 0;
// computerScore = 0;
// console.log(playerScore)
// console.log(computerScore)

function playRound(playerSelection, computerSelection) {
    let winner = "You win"
    let loser = "You lose"
    let tie = "You tied"
    // let wrong = prompt("That is not a valid selection, please select Rock, Paper, or Scissors")

    if (playerSelection == "rock" && computerSelection == "scissors") {
        return winner;
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        return loser;
    }
    else if (playerSelection == "rock" && computerSelection == "rock") {
        return tie;
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return loser;
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return winner;
    }
    else if (playerSelection == "paper" && computerSelection == "paper") {
        return tie;
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        return loser;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return winner;
    }
    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return tie;
    }
    // else {
    //     return wrong;
    // }
}



function game() {
    for (let i = 0; i < 5; i ++) {
        console.log(playRound(playerSelection, computerSelection))
    }
}

console.log(game())