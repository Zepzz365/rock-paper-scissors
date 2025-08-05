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
        play.textContent = ("Tie, no points, comp chose rock")
    }
    if (humanChoice == "paper" && computerChoice == "rock"){
        play.textContent =("You win, comp chose rock")
        humanScore += 1
    }
    if (humanChoice == "scissors" && computerChoice == "rock"){
        play.textContent =("You lose, comp chose rock")
        computerScore += 1
    }
    if (humanChoice == "rock" && computerChoice == "paper"){
        play.textContent =("You lose, comp chose paper")
        computerScore += 1
    }
    if (humanChoice == "paper" && computerChoice == "paper"){
        play.textContent =("Tie, no points, comp chose paper")
    }
    if (humanChoice == "scissors" && computerChoice == "paper"){
        play.textContent =("You win, comp chose paper")
        humanScore += 1
    }
    if (humanChoice == "rock" && computerChoice == "scissors"){
        play.textContent =("You win, comp chose scissors")
        humanScore += 1
    }
    if (humanChoice == "paper" && computerChoice == "scissors"){
        play.textContent =("You lose, comp chose scissors")
        computerScore += 1
    }
    if (humanChoice == "scissors" && computerChoice == "scissors"){
        play.textContent =("Tie, no points, comp chose scissors")
    }
}

const buttons = document.querySelector(".buttons")
const score = document.querySelector(".score")
const play = document.querySelector(".round")
const btns = document.querySelectorAll(".button")
function disableButtons(){
    btns.forEach(btn => btn.disabled= true )
}
function enableButtons(){
    btns.forEach(btn => btn.disabled = false)
}
buttons.addEventListener("click" , (e) => {
    let humanChoice = e.target.textContent
    let computerChoice = getComputerChoice()
    playRound(humanChoice, computerChoice)
    score.textContent = `Human: ${humanScore}, Computer: ${computerScore}`
    if (humanScore == 5 || computerScore == 5){
        disableButtons()
        let winner
        if (humanScore > computerScore){
            winner = "human"
        }else{
            winner = "computer"
        }
        score.textContent = `Human: ${humanScore}, Computer: ${computerScore} => Winner is ${winner}, Click button to restart`
        const btn = document.createElement("button")
        btn.textContent = "Restart"
        const body = document.querySelector("body")
        btn.style.display = "block"
        btn.style.margin = "20px auto"
        btn.style.textAlign = "center"
        body.appendChild(btn)
        btn.addEventListener("click", () =>{
            humanScore = 0
            computerScore = 0
            enableButtons()
            btn.remove()
            score.textContent = `Human: ${humanScore}, Computer: ${computerScore}`
            play.textContent = ""
        })
}
})
