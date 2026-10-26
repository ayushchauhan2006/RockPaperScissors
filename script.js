function getComputerChoice(){
    let random=Math.random()*30;
    if(random<=10){
        return "Rock";
    }
    else if(random<=20){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}
function getHumanChoice(){
    let choice=prompt("Enter Your Choice");
    return choice;
}


function playRound(humanChoice,computerChoice){
    if(!humanChoice){
        return;
    }
    humanChoice=humanChoice.charAt(0).toUpperCase()+humanChoice.slice(1).toLowerCase();
    if(humanChoice==="Rock"){
        if(computerChoice=="Scissors"){
        console.log("You WIN! Rock beats Scissors");
        humanScore++;
    }
        else{
        console.log("You LOSE! Paper beats Rock");
        computerScore++;
        }
}
     else if(humanChoice==="Paper"){
        if(computerChoice=="Rock"){
        console.log("You WIN! Paper beats Rock");
        humanScore++;
    }
        else{
        console.log("You LOSE! Scissors beats Paper");
        computerScore++;
        }
}
        else if(humanChoice==="Scissors"){
        if(computerChoice=="Paper"){
        console.log("You WIN! Scissors beats Paper");
        humanScore++;
    }
        else{
        console.log("You LOSE! Rock beats Scissors");
        computerScore++;
        }
}

}

let humanScore=0;
let computerScore=0;

function playGame(){
    
    for(let i=1;i<=5;i++){
    const humanSelection=getHumanChoice();
    const computerSelection=getComputerChoice();
    playRound(humanSelection,computerSelection);
    }
    if(humanScore>computerScore){
        console.log("You Win the game");
    }
    else{
        console.log("You loss the game");
    }

}
playGame();