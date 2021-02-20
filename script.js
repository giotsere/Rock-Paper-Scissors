let choices = ["rock","paper","scissors"]
const selections = document.querySelectorAll('.ch');
const compHand = document.getElementById("comp-hand");
const playerHand = document.getElementById("player-hand");
const outcomeDiv = document.getElementById("outcome");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
let playerChoice;
let computerChoice;
let outcome;
let pscore = 0;
let cscore = 0;

document.addEventListener('click',(e) =>{
    playerChoice = playerPlay(e.target.id);
    if(playerChoice == "rock" || playerChoice == "scissors" || playerChoice == "paper"){
        computerChoice = computerPlay();
        outcome = playRound(playerChoice,computerChoice);
        displayComp(computerChoice);
        displayPlayer(playerChoice);
        displayOutcome(outcome);
        checkWinner(pscore,cscore);
    }
})

function computerPlay(){
    const random = Math.floor(Math.random() * choices.length)
    return choices[random];
}

function playerPlay(choice){
    let playerP = choice;
    return playerP;
}

function playRound(playerSelection,computerSelection){
    
    let outcome;
    if(playerSelection == computerSelection){
        outcome = "draw";
        return outcome;
    }else if(playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper"){
        outcome = "won";
        return outcome;
    }else{
        outcome = "lost";
        return outcome;
    }
}

function displayComp(computerChoice){
    if(computerChoice == "rock"){
        compHand.innerHTML = '<i class="far fa-hand-rock"></i>'
    }else if(computerChoice == "scissors"){
        compHand.innerHTML = '<i class="far fa-hand-scissors"></i>'
    }else{
        compHand.innerHTML = '<i class="far fa-hand-paper"></i>'
    }
}

function displayPlayer(playerChoice){
    if(playerChoice == "rock"){
        playerHand.innerHTML = '<i class="far fa-hand-rock"></i>'
    }else if(playerChoice == "scissors"){
        playerHand.innerHTML = '<i class="far fa-hand-scissors"></i>'
    }else{
        playerHand.innerHTML = '<i class="far fa-hand-paper"></i>'
    }
}

function displayOutcome(outcome){
    if(outcome == "won"){
        outcomeDiv.innerHTML = "You Won";
        pscore++;
        playerScore.innerHTML = pscore;
        computerScore.innerHTML = cscore;
    }else if(outcome == "lost"){
        outcomeDiv.innerHTML = "You Lost";
        cscore++;
        computerScore.innerHTML = cscore;
        playerScore.innerHTML = pscore;
    }else{
        outcomeDiv.innerHTML = "Draw";
        playerScore.innerHTML = pscore;
        computerScore.innerHTML = cscore;
    }
}

function checkWinner(playerScore,computerScore){
    if(computerScore == 5){
        outcomeDiv.innerHTML = "Computer won the match!"
        playerScore.innerHTML = 0;
        computerScore.innerHTML = 0;
        cscore = 0;
        pscore = 0;
    }

    if(playerScore == 5){
        outcomeDiv.innerHTML = "You won the match!"
        playerScore.innerHTML = 0;
        computerScore.innerHTML = 0;
        cscore = 0;
        pscore = 0;
    }
}