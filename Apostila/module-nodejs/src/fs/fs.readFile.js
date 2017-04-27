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