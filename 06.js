let age = 26;
let salary = 3000;
if(age >= 21 && salary >= 25000){
    console.log("loan approved");

}
else if(age < 21 && salary < 25000){
    console.log("loan rejected due to both age and salary criteria");

}


else if(age<21){
    console.log("loan rejected due to age limit");
    
}else if(salary<25000){
    console.log("loan rejected due to low salary amount");
}