'use strict'
/**
 * async, sync
 */

const fs = require('fs');


fs.readFile('./meusArquivos/helloworld.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});


const dataSync = fs.readFileSync('./meusArquivos/hiworld.txt', 'utf8');

console.log(dataSync);
