//Q22. 1 se 100 tak jitne numbers 3 se divisible hain unka total sum nikalo
let a = 0;
for(let i=1 ; i <= 100; i++){
    if(i%3==0){
       
        a = a+i;
        console.log(a)
    }
}