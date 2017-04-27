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