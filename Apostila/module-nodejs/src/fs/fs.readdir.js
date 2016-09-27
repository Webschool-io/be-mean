const fs = require('fs')
const dir = process.argv[2] || '.'

fs.readdir( dir, (err, files) => { 
  if (err) throw err
  console.log(files)
})

// const files = fs.readdirSync(dir)
// console.log(files)