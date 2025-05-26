const app = require('./app')  //import data from app.js file
// console.log(app)
// console.log(app.x)  //10
// console.log(app.y) //20
// console.log(app.z) 


const arr = [2, 4, 7, 13, 3, 8, 3];
// console.log(arr)
// console.log(arr[0])

// we can simply use ()
const filterdata1 = arr.filter((i) => (i === 3))
console.log(filterdata1)

//if we use curli {} bracket then we need to use keyword return or return the value without return we get empty array
const filterdata2 = arr.filter((i) => {
   return i > 3;
})
console.log(filterdata2)
