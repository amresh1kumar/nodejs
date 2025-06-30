//Synchronous (sync)
console.log("Sync")
// console.log("1");
// console.log("2");
// console.log("3");

//Asynchronous (async)
console.log("Now Async")
// console.log("1");
// setTimeout(() => {
//    console.log("2");
// }, 1000);
// console.log("3");

//Async/Await in JavaScript
async function run() {
   console.log("Async/Await in JavaScript");
   console.log("1");
   await new Promise(resolve => setTimeout(resolve, 5000));
   //after 5s print below two lines
   console.log("2"); 
   console.log("3");
}
run();
