let choices = ["rock","paper","scissors"]
const selections = document.querySelectorAll('.ch');
let playerChoice;
let computerChoice;
const compHand = document.getElementById("comp-hand");
const playerHand = document.getElementById("player-hand");

document.addEventListener('click',(e) =>{
    let playerChoice = playerPlay(e.target.id);
    let computerChoice = computerPlay();
    playRound(playerChoice,computerChoice);
    displayComp(computerChoice);
    displayPlayer(playerChoice);
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
    if(playerSelection == computerSelection){
        console.log("draw");
    }else if(playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper"){
        console.log("you won");
    }else{
        console.log("you lost");
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