function getComputerChoice(){
    let number= Math.floor(Math.random() * 3);
    let choice;
    switch (number){
        case 0:
            choice= "rock"
            break
        case 1:
            choice= "paper"
            break
        case 2:
            choice= "scissors"
            break
    }
    return choice
}
function getHumanChoice(){
    let choice= prompt("choice?")
    return choice
}
let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase()
    if (humanChoice == "rock" && computerChoice == "rock"){
        console.log("Tie, no points, comp choseed rock")
    }
    if (humanChoice == "paper" && computerChoice == "rock"){
        console.log("You win, comp choseed rock")
        humanScore += 1
    }
    if (humanChoice == "scissors" && computerChoice == "rock"){
        console.log("You lose, comp choseed rock")
        computerScore += 1
    }
    if (humanChoice == "rock" && computerChoice == "paper"){
        console.log("You lose, comp choseed paper")
        computerScore += 1
    }
    if (humanChoice == "paper" && computerChoice == "paper"){
        console.log("Tie, no points, comp choseed paper")
    }
    if (humanChoice == "scissors" && computerChoice == "paper"){
        console.log("You win, comp choseed paper")
        humanScore += 1
    }
    if (humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You win, comp choseed scissors")
        humanScore += 1
    }
    if (humanChoice == "paper" && computerChoice == "scissors"){
        console.log("You lose, comp choseed scissors")
        computerScore += 1
    }
    if (humanChoice == "scissors" && computerChoice == "scissors"){
        console.log("Tie, no points, comp choseed scissors")
    }
    
    
}

function playGame(){
    let humanSelection
    let computerSelection
    for (let i=0; i <=4;i++){
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }
    console.log("human score: " + humanScore + ", computer score: " + computerScore)
}
playGame()