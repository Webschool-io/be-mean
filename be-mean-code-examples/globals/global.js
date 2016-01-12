console.log(__dirname);

console.log(__filename);



var time = setInterval(function() {
	console.log('Hello, world with interval');
}, 1000);


setTimeout(function() {
	clearInterval(time);
}, 5000);


module.exports = object