function value(user,computer){
    if( user === computer) return "draw";
    if(user === "rock" && computer ==="scissor" ) return "user win";
    if(user === "paper" && computer ==="rock" ) return "user win";
    if(user === "scissor" && computer === "paper" ) return "user win";

    return "computer win"
}
console.log(value("rock", "paper"))