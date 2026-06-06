let a = 5;
let b = 2;
let c = 5;

if(a===b && b===c){
    console.log("equilateral triangle");
}else if(a===b || b===c || a===c){
    console.log("isoslec triangle");
}else{
    console.log("other triangle");
};