function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"]
    let randomChoice = Math.floor(Math.random() * choice.length)
    let computerChoice = choice[randomChoice]
    return computerChoice;
}


const playerSelection = prompt("What is your guess? (Rock, Paper, or Scissors)").toLowerCase()
const computerSelection = getComputerChoice()

console.log(playerSelection)
console.log(computerSelection)
playerScore = 0;
computerScore = 0;
console.log(playerScore)
console.log(computerScore)

function playRound(playerSelection, computerSelection) {
    let winner = "You win"
    let loser = "You lose"
    let tie = "You tied"
    let wrong = prompt("That is not a valid selection, please select Rock, Paper, or Scissors")

    if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore ++;
        return winner;
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore ++;
        return loser;
    }
    else if (playerSelection == "rock" && computerSelection == "rock") {
        return tie;
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore ++;
        return loser;
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore ++;
        return winner;
    }
    else if (playerSelection == "paper" && computerSelection == "paper") {
        return tie;
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore ++;
        return loser;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore ++;
        return winner;
    }
    else if (playerSelection == "scissors" && computerSelection == "scissors") {
        return tie;
    }
    else {
        return wrong;
    }
}

console.log(playRound(playerSelection, computerSelection))

// function game() {
//     console.log(playRound(playerSelection, computerSelection))
// }

// console.log(game())