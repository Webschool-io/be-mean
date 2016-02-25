
var error = "module.js:341"+
"    throw err;"+
"    ^"+

"Error: Cannot find module 'mongoose'"+
"    at Function.Module._resolveFilename (module.js:339:15)"+
"    at Function.Module._load (module.js:290:25)"+
"    at Module.require (module.js:367:17)"+
"    at require (internal/module.js:16:19)"+
"    at Object.<anonymous> (/home/suissa/www/be-mean-instagram/Apostila/module-nodejs/src/mongoose/schemas/teste.js:1:80)"+
"    at Module._compile (module.js:413:34)"+
"    at Object.Module._extensions..js (module.js:422:10)"+
"    at Module.load (module.js:357:32)"+
"    at Function.Module._load (module.js:314:12)"+
"    at Function.Module.runMain (module.js:447:10)"+
";";

const GeneticErrors = require('./GeneticErrors')(error); 