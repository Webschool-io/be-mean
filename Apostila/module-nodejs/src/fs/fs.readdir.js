const fs = require('fs')
fs.readdir( process.argv[2], (err, files) => (err) 
  ? throw err 
  : console.log(files)
})
console.log("Fired callback.")