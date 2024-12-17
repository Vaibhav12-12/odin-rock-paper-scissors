let humanScore = 0;
let computerScore = 0;

// function playGame() {
//     for(let rounds = 0; rounds < 5; rounds++) {
//         let humanSelection = getHumanChoice();
//         let computerSelection = getComputerChoice();
//         console.log(playRound(humanSelection, computerSelection));
//     }
// }



function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return(choices[Math.floor(Math.random() * 3)]);
};

function getHumanChoice() {
    let yourChoice = prompt("Five rounds Roshambo! Pick a choice - rock, paper or scissors. Check with the inspect tool to see the output.");
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
        document.getElementById("result").innerText = "Draw!";
    } else if((humanChoice === "rock" && computerChoice === "paper") || (humanChoice === "scissors" && computerChoice === "rock") || (humanChoice === "paper" && computerChoice === "scissors")) {
        computerScore++;
        document.getElementById("result").innerText = "Computer Wins! " + "Human Score: " + humanScore + " Computer Score: " + computerScore;
    } else {
        humanScore++;
        document.getElementById("result").innerText = "Human Wins! " + "Human Score: " + humanScore + " Computer Score: " + computerScore;
    }
    if(humanScore === 5) {
        document.getElementById("result").innerText = "Game won by Human!";
        document.getElementById("reset").style.display = "inline";
        document.getElementById("choices").style.display = "none";
    }
    if(computerScore === 5) {
        document.getElementById("result").innerText = "Game won by Computer!";
        document.getElementById("reset").style.display = "inline";
        document.getElementById("choices").style.display = "none";
    }
}

function resetRound() {
    humanScore = 0;
    computerScore = 0;
    document.getElementById("reset").style.display = "none";
    document.getElementById("choices").style.display = "inline";
}

// playGame();
