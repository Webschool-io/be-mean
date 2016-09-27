const fs = require('fs')
const dir = process.argv[2] || 'nova pasta'


fs.mkdir(dir, 0777, (err) => { 
  if (err) throw err
  console.log(`Diretório '${dir}' criado!`)
})