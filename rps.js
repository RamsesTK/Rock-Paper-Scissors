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

    
    while(true){
        playerChoice = prompt("What do you chose? [ROCK], [PAPER] OR [SCISSORS]")
        result = playRound(playerChoice, getComputerChoice());

        if(result.includes("win")){
            ++yourScore;
            window.alert(`${result}\nYOU:${yourScore} COMPUTER: ${computerScore}`);}
        else if(result.includes("lose")){
            ++computerScore;
            window.alert(`${result}\nYOU:${yourScore} COMPUTER: ${computerScore}`);}
        else
            window.alert(`TIE!\nYOU:${yourScore} COMPUTER: ${computerScore}`);

        if (computerScore === 5){
            window.alert('COMPUTER WON, GLORY TO JAVASCRIPT');
            break;}

        else if(yourScore === 5){
            window.alert('YOU WON, GLORY TO HUMANITY');
            break;}

     }

}


game()
