const fs = require("fs")

// Async
fs.watchFile('webschool.txt', (curr, prev) => {
  console.log(`the current mtime is: ${curr.mtime}`, curr)
  console.log(`the previous mtime was: ${prev.mtime}`, prev)
})
