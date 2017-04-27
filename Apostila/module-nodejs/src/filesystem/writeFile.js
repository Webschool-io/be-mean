'use strict'

const fs = require('fs');

// sync
const write = fs.writeFileSync("./hello.txt","Olá pessoa!");

// async
fs.writeFile("./hello2.txt","Olá, eu sou um conteúdo assíncrono", (err, result) => {
  if (err) throw err;
  console.log(result);
});

const writeStream = fs.createWriteStream('./helloStream.txt', {defaultEnconding:'utf8'});
writeStream.write("Olá,  eu sou um stream gravável (writable stream)!");
