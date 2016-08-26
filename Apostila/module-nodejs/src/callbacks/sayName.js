'use strict'

/*

callback (err, result)

*/

function callback (err, result) {
  if(err) throw new Error(err)
  console.log('Meu nome é ', result)
}

function sayName (name, callback) {
  if(typeof name === 'string') return callback(null, name)
  const err = 'Você precisa passar uma STRING para name'
  return callback(err, null)
}

sayName('Suissa', callback)
sayName(666, callback)
