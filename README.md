# rock-paper-scissors
The array "const options = ["rock" , "paper", "scissors"];" was used as the base for functions related to choices, wether player choice or computer choice.


This was used to force the player to make a choice between [Rock, Paper, Scissors] and make it case insensitive to make it easier for the right input.

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

The purpose of this function was to declare the winner of each round. 
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

    The next function was used for declaring the winner in the console later.

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


This was a simple 5 rounds loop of Rock, Paper, Scissors, with giving scores each round and declaring the winner with the most points. 

function game(){
    let scorePlayer = 0 ;
    let computerScore = 0 ;
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

        } else if (checkWinner(playerSelection, computerSelection) == "computer"){
            computerScore++;
      }
    }
    
    if(scorePlayer > computerScore){
        console.log ("The Player is the winner.");
    } 
    else if (scorePlayer < computerScore){
        console.log ("The Computer is the winner.");
    } 
    else {
        console.log ("It is a tie!");
    }

    This function command was used to start the game as soon as the webpage loads up.