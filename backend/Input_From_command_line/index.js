
// console.log(process); // its show all property
// console.log(process.argv); // argument vector
// console.log(process.argv[2]);

const fs = require('fs'); // import file system

//create file cmd = node index.js apple.txt 'apple'
// const input = process.argv;
// fs.writeFileSync(input[2],input[3])

const input = process.argv;

if (input[2] == 'add') // cmd--> node index.js add add.txt 'add file'
{
   fs.writeFileSync(input[3], input[4])
} else if (input[2] == 'remove')  // -->node index.js remove add.txt
{
   fs.unlinkSync(input[3])
}
else {
   console.log("inviled input");
}



