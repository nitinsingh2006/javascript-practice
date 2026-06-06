let balance = 5000;
let withdraw = 700;

if(balance < withdraw){
  console.log("insuffucuent balance");    
}else{
    console.log("withdrawal successful");  
    let a = balance - withdraw;
    console.log("remaining balance", a);  
}