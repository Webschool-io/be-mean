/**
 * sincrona
 */
var fs = require('fs');


var write = fs.writeFileSync("./hello.txt","Hello, motherfucker!");


/**
 * async
 */


fs.writeFile("./hello2.txt","hello, I'm a motherfucker async content", function (err, result) {
  if (err) throw err;
  console.log(result);
});

var writeStream = fs.createWriteStream('./helloStream.txt', {defaultEnconding:'utf8'});
writeStream.write("Hello,  I'm a writable stream!");
