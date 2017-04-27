'use strict'
/**
 * criar arquivos dentro de um diretório
 */
const fs = require('fs');


fs.mkdirSync('meusArquivos');

fs.writeFileSync('./meusArquivos/helloworld.txt', "hello, world!");
fs.writeFileSync('./meusArquivos/hiworld.txt', "hi, world!");


fs.readdir('./meusArquivos', (err, files) => {
  if (err) throw err;
  console.log(files);
});
