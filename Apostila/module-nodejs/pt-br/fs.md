# FileSystem

Módulo para utilização do sistema de arquivos do seu Sistema Operacional.

[https://nodejs.org/dist/latest-v6.x/docs/api/fs.html](https://nodejs.org/dist/latest-v6.x/docs/api/fs.html)

## Arquivos

### readFile

Logicamente essa função serve para **ler** o conteúdo de um arquivo.

```js
const fs = require("fs")

// Async
fs.readFile('webschool.txt', function (err, data) {
  if (err) return console.error(err)
  console.log("Leitura async: " + data.toString())
})

// Sync
const data = fs.readFileSync('webschool.txt')
console.log("Leitura sync: " + data.toString())

console.log('Final da execução')
```

Documentação: [https://nodejs.org/dist/latest-v6.x/docs/api/fs.html#fs_fs_writefile_file_data_options_callback](https://nodejs.org/dist/latest-v6.x/docs/api/fs.html#fs_fs_writefile_file_data_options_callback)

### writeFile


Logo essa função serve para **escrever** o conteúdo de um arquivo.

```js
const fs = require("fs")

const file = 'webschool.txt'
const data = 'Webschool é nois!'
const encoding = 'utf8'
const callback = (err) => {
  if (err) throw err;
  console.log('Salvei async!!');
}

// Async
fs.writeFile(file, data, encoding, callback);
// fs.writeFile(file, data, 'utf8', callback);

// Sync
fs.writeFileSync(file, data)
console.log('Salvei sync')

console.log('Final da execução')
```

### appendFile

A função `appendFile` é deveras interessante pois é com ela que ireos adicionar conteúdos em um arquivo sem sobrescrevê-lo.

```js
const fs = require("fs")

const file = 'webschool.txt'
const data = '\nby Suissera.'
const encoding = 'utf8'
const callback = (err) => {
  if (err) throw err
  console.log('Adicionado conteúdo novo!')
}

// Async
fs.appendFile(file, data, encoding, callback)
// fs.appendFile(file, data, 'utf8', callback)

// Sync
fs.appendFileSync(file, data, encoding, callback)

console.log('Final da execução')
```

Documentação: [https://nodejs.org/dist/latest-v6.x/docs/api/fs.html#fs_fs_appendfile_file_data_options_callback](https://nodejs.org/dist/latest-v6.x/docs/api/fs.html#fs_fs_appendfile_file_data_options_callback)

### watchFile

## Diretórios

### readdir

### mkdir

## rename

### rmdir

