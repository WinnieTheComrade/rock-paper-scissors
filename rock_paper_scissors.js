//Rock Paper Scissors//

//getComputerChoice for randoming either rock, paper or scissors. playerSelection for players rock, paper or scissors.//
//computerSelection for displaying the randomed value. 
//Make playerSelection case insensitive
//Conditional statements (if, if else, else) for declaring the winner.

// getComputerChoice array = [0]Rock, [1]Paper [2] Scissors
const playerSelection = prompt ("Rock, Paper, Scissors?", "").toLowerCase();
const getComputerChoice = ["rock" , "paper", "scissors"];
let computerSelection = getComputerChoice[Math.floor(Math.random() * getComputerChoice.length)] ;

console.log (playerSelection)
function playGround(playerSelection , computerSelection){
    if (playerSelection === "rock" && computerSelection === "rock" 
    || playerSelection === "paper" && computerSelection === "paper" 
    || playerSelection === "scissors" && computerSelection === "scissors")
    return "Draw."
else if 
    (playerSelection === "rock" && computerSelection === "scissors"
    || playerSelection === "paper" && computerSelection === "rock"
    || playerSelection === "scissors" && computerSelection === "paper")
    return "You win."

    else
    return "You lost."
}
