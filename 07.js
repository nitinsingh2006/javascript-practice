let player1 = "paper";
let player2 = "scissors";

if(player1 === player2){
    console.log("match draw");
}else if(player1 == "rock" && player2 == "scissors"||
         player1 == "paper" && player2 == "rock" ||
         player1 == "scissors" && player2 == "paper"  
){console.log("player1 is winning")
    
}else{
    console.log("player2 is winning");
};