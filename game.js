let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    // Generate a random choice for the computer
    return Math.floor(Math.random() * 3) + 1;
};

function getComputerAnswer() {
    let computerChoice = getComputerChoice();
    if (computerChoice == 1) return "Rock";
    else if (computerChoice == 2) return "Paper";
    else if (computerChoice == 3) return "Scissors";
}

function getHumanChoice() {
    let answer = prompt("Rock, paper or scissors?");
    let lowerCaseAnswer = answer.toLowerCase();
    if (lowerCaseAnswer == "rock") return "Rock";
    else if (lowerCaseAnswer == "paper") return "Paper";
    else if (lowerCaseAnswer == "scissors") return "Scissors";
    // Add a fallback for invalid inputs
    else {
        console.log("Invalid input, please enter Rock, Paper, or Scissors.");
        return getHumanChoice(); // Re-prompt the user
    }
}

// Get the choices
let humanChoice = getHumanChoice();
let computerChoice = getComputerAnswer();

console.log("Computer chooses: " + computerChoice);
console.log("Human chooses: " + humanChoice);

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "Rock" && computerChoice == "Paper") {
        computerScore = computerScore + 1;
        return "Computer wins";
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
        humanScore = humanScore + 1;
        return "Human wins";
    } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
        computerScore = computerScore + 1;
        return "Computer wins";
    } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
        humanScore = humanScore + 1;
        return "Human wins";
    } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
        computerScore = computerScore + 1;
        return "Computer wins";
    } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        humanScore = humanScore + 1;
        return "Human wins";
    } else {
        return "It's a tie";
    }
}

// Call the playRound function with the correct arguments
console.log(playRound(humanChoice, computerChoice));
console.log("Human Score: " + humanScore);
console.log("Computer Score: " + computerScore);
