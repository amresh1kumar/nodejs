const fs = require('fs');  // non-global module
//A module that we need to import,that module called global module

fs.writeFileSync("hello1.text","This is Amresh")
fs.writeFileSync("hello2.text","My name is Amresh")

console.log("->>",__dirname)  // show the dir name
console.log("->>",__filename)  // show the dir name and filename