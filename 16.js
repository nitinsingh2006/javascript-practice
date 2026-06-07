let years = 6;
let Salary = -10000;

let bonus;
if(years <= 0 || Salary <=0){
    console.log("invalid output")
}
else if(Salary >= 40000 && years >= 5){

        bonus = Salary * 20/100
        console.log(bonus)

}else if(Salary >= 25000 && years >= 3){

     bonus = Salary * 10/100
        console.log(bonus)

}else{
     bonus = Salary * 5/100
        console.log(bonus)
} 