//Rock Paper Scissors//

//getComputerChoice for randoming either rock, paper or scissors. playerSelection for players rock, paper or scissors.//
//computerSelection for displaying the randomed value. 
//Make playerSelection case insensitive
//Conditional statements (if, if else, else) for declaring the winner.

// ComputerChoice array = [0]Rock, [1]Paper [2] Scissors
// Computer randomized selection.
    

    const rockButton = document.querySelector('.rock')
    const paperButton = document.querySelector('.paper')
    const scissorsButton = document.querySelector('.scissors')
    const outcome = document.querySelector('.outcome')
    const options = ['rock', 'paper', 'scissors'];
    let scorePlayer = 0 ;
    let scoreComputer = 0 ;

    function getComputerChoice(){
        const choice = options[Math.floor(Math.random() * options.length)];
        return choice;
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
    

function scoreReset (){ 
        scorePlayer = scorePlayer - scorePlayer;
        scoreComputer = scoreComputer - scoreComputer;
    }
    


function playRound(playerSelection , computerSelection){  
    

    const p = document.createElement('p');
    let p2 =document.createElement('p2');
    const p3 = document.createElement('p3')
    

    console.log ('1', playerSelection, '2', computerSelection)
    console.log (p);
    
    

    const result = checkWinner(playerSelection , computerSelection)

    if (result == "Tie."){
        p.innerText = "It's a tie."
    } else if (result == "player"){
        p.innerText =  `You win! ${playerSelection} beats ${computerSelection}.`
        scorePlayer += 1;
    } else {
        p.innerText = `You lose! ${computerSelection} beats ${playerSelection}.`
        scoreComputer += 1;
       
    }

    if (scorePlayer == 5){
        p2.innerText = `Score was: ${scorePlayer} : ${scoreComputer}`
        p3.innerText = "Congratulation. You won the round!"
        console.clear();
        console.log (p2);
        console.log (p3);
        scoreReset();
    }
    else if (scoreComputer == 5){ 
        p2.innerText = `Score was: ${scorePlayer} : ${scoreComputer}`
        console.clear();
        console.log (p2);
        console.log (p3);
        p3.innerText = "The computer won the round."
        scoreReset();
    } 
    else {
        console.log (p2);
        p2.innerText = `Score is: ${scorePlayer} : ${scoreComputer}`
    }
}

   
rockButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'rock'
    playRound(playerSelection , computerSelection)
});

paperButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'paper'
    playRound(playerSelection , computerSelection)
});

scissorsButton.addEventListener('click', () => {
    const computerSelection = getComputerChoice()
    const playerSelection = 'scissors'
    playRound(playerSelection , computerSelection)
});




/* old code

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

        } else (checkWinner(playerSelection, computerSelection) == "computer");{
            scoreComputer++;
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
*/