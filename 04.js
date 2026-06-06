let amount = 12000;


if(amount >= 2000){
 a = amount * 20 / 100;
  let x = amount - a;
  console.log("ye wala");
  console.log("original amount",amount);
  console.log("discount amount",a);
  console.log("final amount",x);
}else if(amount >= 1000){
     b = amount/10;
     console.log("original amount",amount);
  let y = amount - b;
  console.log("final amount",y);
  console.log("discount amount",b);
}else{
    console.log("no discount");
}