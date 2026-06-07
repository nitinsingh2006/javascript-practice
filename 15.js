let units = 1000;
let a;
if(units <=100){
     a = units * 5;
    console.log(a);
}else if(units <=200){
     a = units * 7;
    console.log(a);
}else if(units <=300){
     a = units * 10;
    console.log(a);
}else{
     a = units * 15;
    console.log(a);
}
if(a >= 2000){
    let b = a * 10/100;
    a = a + b;
    console.log(a);

}else{
    console.log(bye)
}