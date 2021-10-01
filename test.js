

// function hello(){
//     console.log("hello")
// }

// hello();
// //buffer concatination
// var buffer1 = new Buffer('TutorialsPoint ');
// var buffer2 = new Buffer('Simply Easy Learning');
// var buffer3 = Buffer.concat([buffer1,buffer2]);

// console.log("buffer3 content: " + buffer3.toString());
var fs = require("fs");

// Asynchronous - Opening File
console.log("Going to open file!");
fs.open('input.txt', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
   console.log("File opened successfully!");     
});