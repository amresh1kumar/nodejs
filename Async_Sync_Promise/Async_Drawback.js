let a = 10;
let b = 0;

setTimeout(() => {
   b = 20;
   console.log(b)
}, 2000)


console.log(a + b)  // here a+b = 10  not 30 this is drawback
