//Rock Paper Scissors//

//getComputerChoice for randoming either rock, paper or scissors. playerSelection for players rock, paper or scissors.//
//computerSelection for displaying the randomed value. 
//Make playerSelection case insensitive
//Conditional statements (if, if else, else) for declaring the winner.

// ComputerChoice array = [0]Rock, [1]Paper [2] Scissors
// Computer randomized selection.
    

    // Computer Selection
    const options = ["rock" , "paper", "scissors"];
    
    function getComputerChoice(){
        const choice = options[Math.floor(Math.random() * options.length)];
        return choice;
    }
    function getPlayerChoice(){
        let validatedInput = false;
        while (validatedInput == false){
            const choice = prompt ("Rock, Paper, Scissors.");
                if (choice == null){
                continue;
        }
        const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}

    function checkWinner(playerSelection , computerSelection){
    if (playerSelection == computerSelection){
        return "Tie.";
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissors") || 
        (playerSelection == "paper" && computerSelection == "rock") || 
        (playerSelection == "scissors" && computerSelection == "paper")
        
      
    ){
        return "player";
    }
    else {
        return "computer";
        }
    }
    
function playRound(playerSelection , computerSelection){  
    const result = checkWinner(playerSelection , computerSelection)
    //Tie
    if (result == "Tie."){
        return "It's a tie."
    } else if (result == "player"){
        return `You win! ${playerSelection} beats ${computerSelection}.`
    } else {
    return `You lose! ${computerSelection} beats ${playerSelection}.`
    }
}

function game(){
    let scorePlayer = 0 ;
    let scoreComputer = 0 ;
    console.log("Welcome!")
    console.log("Let's play a game.")
    console.log ("---------------")
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        
        console.log (playRound(playerSelection , computerSelection));
        console.log ("---------------")
        if (checkWinner(playerSelection , computerSelection) == "player"){
            scorePlayer++;

        } else (checkWinner(playerSelection, computerSelection) == "computer"){
            computerScore++;
      }
    }
    
    if(scorePlayer > scoreComputer){
        console.log ("The Player is the winner.");
    } 
    else if (scorePlayer < scoreComputer){
        console.log ("The Computer is the winner.");
    } 
    else {
        console.log ("It is a tie!");
    }
}
game();