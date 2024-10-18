let humanScore = 0;
let computerScore = 0;

function playGame() {
    for(let rounds = 0; rounds < 5; rounds++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        console.log(playRound(humanSelection, computerSelection));
    }
}



function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return(choices[Math.floor(Math.random() * 3)]);
};

function getHumanChoice() {
    let yourChoice = prompt("Roshambo! Pick a choice - rock, paper or scissors. Check with the inspect tool to see the output.");
    switch(yourChoice.toLowerCase()) {
        case "rock":
        return "rock";
        break;
        case "paper":
        return "paper";
        break;
        case "scissors":
        return "scissors";
        break;
        default:
        alert("Please check the spelling");
    }
};

function playRound(humanChoice, computerChoice) {
    if(humanChoice == null) return "Invalid Input";
    if(humanChoice === computerChoice) {
        return "Draw!";
    } else if((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "scissors" && computerChoice === "rock") || (humanChoice === "paper" && computerChoice === "scissors")) {
        computerScore++;
        return "Computer Wins! " + "Human Score: " + humanScore + " Computer Score: " + computerScore;
    } else {
        humanScore++;
        return "Human Wins! " + "Human Score: " + humanScore + " Computer Score: " + computerScore;
    }
}

playGame();
