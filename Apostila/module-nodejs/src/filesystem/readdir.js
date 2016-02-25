/**
 * criar arquivos dentro de um diretório
 */
var fs = require('fs');


fs.mkdirSync('meusArquivos');

fs.writeFileSync('./meusArquivos/helloworld.txt', "hello, world!");
fs.writeFileSync('./meusArquivos/hiworld.txt', "hi, world!");


fs.readdir('./meusArquivos', function (err, files) {
  if (err) throw err;
  console.log(files);
});
