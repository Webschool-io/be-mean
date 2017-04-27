const fs = require('fs')

fs.stat('./fs.stats.js', (err, stats) => console.log('É arquivo?', stats.isFile()))

/**
stats.isFile()
stats.isDirectory()
stats.isBlockDevice()
stats.isCharacterDevice()
stats.isSymbolicLink() (only valid with fs.lstat())
stats.isFIFO()
stats.isSocket()
*/