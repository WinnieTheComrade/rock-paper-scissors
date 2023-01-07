//Rock Paper Scissors//

//getComputerChoice for randoming either rock, paper or scissors. playerSelection for players rock, paper or scissors.//
//computerSelection for displaying the randomed value. 
//Make playerSelection case insensitive
//Conditional statements (if, if else, else) for declaring the winner.

// getComputerChoice array = [0]Rock, [1]Paper [2] Scissors
const playerSelection = ["Rock" , "Paper", "Scissors"];
const getComputerChoice = ["Rock" , "Paper", "Scissors"];
const computerSelection = getComputerChoice[Math.floor(Math.random() * getComputerChoice.length)] ;

if (playerSelection === computerSelection){
    result.textContent ="It is a draw."
}   