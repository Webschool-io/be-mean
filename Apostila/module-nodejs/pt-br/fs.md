# FileSystem

Módulo para utilização do sistema de arquivos do seu Sistema Operacional.

[https://nodejs.org/dist/latest-v6.x/docs/api/fs.html](https://nodejs.org/dist/latest-v6.x/docs/api/fs.html)

## Arquivos

Nessa parte da aula falaremos apenas sobre a manipulação de arquivos.

### writeFile

Obviamente essa função serve para **escrever** o conteúdo de um arquivo.

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

### watchFile

Essa é uma dica rápida para caso você queira saber quando um arquivo é modificado.

```js
const fs = require("fs")

// Async
fs.watchFile('webschool.txt', (curr, prev) => {
  console.log(`the current mtime is: ${curr.mtime}`, curr)
  console.log(`the previous mtime was: ${prev.mtime}`, prev)
})
```

## Diretórios

Agora partiremos para a manipulação de pastas/diretórios!

### readdir

Lê o conteúdo de um diretório ecluindo `.` e `..`.

```js
const fs = require('fs')
const dir = process.argv[2] || '.'

// Async
fs.readdir( dir, (err, files) => { 
  if (err) throw err
  console.log(files)
})

// Sync
// const files = fs.readdirSync(dir)
// console.log(files)
```

Documentação [https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback](https://nodejs.org/api/fs.html#fs_fs_readdir_path_options_callback)

### mkdir

```js
const fs = require('fs')
const dir = process.argv[2] || 'nova pasta'


fs.mkdir(dir, 0777, (err) => { 
  if (err) throw err
  console.log(`Diretório '${dir}' criado!`)
})
```


## rename

### rmdir

## Stats

Uma dica sapeca é utilizarmos o `stat` para saber o estado de algo, por exemplo:

- se é um arquivo;
- se é um dirtório;
- se é um link simbólico;
- se é um socket;
- etc.

E para isso fazer isso é bem simples, apenas passamos o que queremos testar e o seu *callback*, por exemplo:

```js
const fs = require('fs')

fs.stat('./fs.stats.js', (err, stats) => console.log('É arquivo?', stats.isFile()))
// É arquivo? true

/**
stats.isFile()
stats.isDirectory()
stats.isBlockDevice()
stats.isCharacterDevice()
stats.isSymbolicLink() (only valid with fs.lstat())
stats.isFIFO()
stats.isSocket()
*/
```
