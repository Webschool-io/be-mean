'use strict';
const http = require('http');
process.nextTick(() => {
	console.log('Eu sou um async');
});



console.log(process.execPath);
console.log(process.cwd());

console.log(process.pid);

let server = http.createServer((req, res)=>{

});


server.listen(3000, () => {
	console.log('I am on');
});
process.on('SIGINT', () => {
	console.log('\teu sai caraa!');
	process.exit(0);
});