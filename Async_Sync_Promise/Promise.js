// let a = 10;
// let b = 0;

// setTimeout(() => {
//    b = 20;
//    console.log(b)
// }, 2000)

// console.log(a + b)  // here a+b = 10  not 30 this is drawback


// handle drawback 
let a=20;
let b=0;

let watingData = new Promise((resolve, reject)=>{
   setTimeout(()=>{
      resolve(30);
   },2000)
})

watingData.then((data)=>{
   b=data;
   console.log(a+b);
})