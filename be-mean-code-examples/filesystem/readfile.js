/**
 * async, sync
 */

var fs = require('fs');


fs.readFile('./meusArquivos/helloworld.txt', 'utf8',function (err, data) {
  if (err) throw err;
  console.log(data);
});


var dataSync = fs.readFileSync('./meusArquivos/hiworld.txt', 'utf8');

console.log(dataSync);
