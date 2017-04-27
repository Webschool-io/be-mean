'use strict';

const readFile = require('./fs-promise');

readFile('./persons.json')
.then(function(data) {
  success(data);
})
.catch(function(err){
  error(err);
});

readFile('./perso.json')
.then(success , error);

function success (data) {
  console.log(data);
}

function error (err) {
  console.error(err);
}
