'use strict';
console.log('start');

// é  primitivo  assíncrono!

process.nextTick(() => {
	console.log('nextTick callback');
});


console.log('programado');


