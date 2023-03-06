const playerChoice = 'rock'

function getComputerChoice(){
    choice =  Math.floor(Math.random()*3);
    if(choice === 0)
        choice = 'rock';
    else if(choice ===1)
        choice = 'paper';
    else
        choice = 'scissors';

    return choice
};

// function getPlayerChoice(){
//     return playerChoice;
// }

function playRound(playerChoice,computerChoice){
    if (playerChoice.toLowerCase() === 'rock'){
        if (computerChoice.toLowerCase() === 'paper')
            return'Computer chosed paper, you lose'
        else if (computerChoice.toLowerCase() === 'scissors')
            return'Computer chosed scissors, you win'
        else{
            return'Computer chosed rock too, tie!'
        }
    } 
    else if(playerChoice.toLowerCase() === 'paper'){
        if (computerChoice.toLowerCase() === 'scissors')
            return'Computer chosed scissors, you lose'
        else if (computerChoice.toLowerCase() === 'rock')
            return'Computer chosed rock, you win'
        else{
            return'Computer chosed paper too, tie!'
        }
    }
    else if(playerChoice.toLowerCase() === 'scissors'){
        if (computerChoice.toLowerCase() === 'rock')
            return'Computer chosed rock, you lose'
        else if (computerChoice.toLowerCase() === 'paper')
            return'Computer chosed paper, you win'
        else{
            return'Computer chosed scissors too, tie!'
        }
    }
    else{
        return 'YOU CAN ONLY CHOOSE [ROCK], [PAPER] OR [SCISSORS]'
    }


}



function game(){
    let yourScore = 0;
    let computerScore = 0;
    let isWinner = false;
    // isWinner === false
    while(true){
        result = playRound(playerChoice, getComputerChoice());
        console.log(result);
        if(result.includes("win"))
            ++yourScore;
        else if(result.includes("lose"))
            ++computerScore;
        
        if (computerScore === 5){
            console.log('COMPUTER WON, GLORY TO JAVASCRIPT');
            break;}
            // isWinner = true;}
            // break;
        else if(yourScore === 5){
            console.log('YOU WON, GLORY TO HUMANITY');
            break;}
        // your code here!
     }

}



game()
// for(i = 0;i <3; i++){
//     console.log(
//         playRound(playerChoice, getComputerChoice())
//         );}