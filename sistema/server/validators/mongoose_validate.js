const mongoose = require('mongoose');
const MODULES_PATH = './../modules/';
const MODEL_PATH = 'users/';
const MODEL = 'user_model';
const Model = require(MODULES_PATH + MODEL_PATH + MODEL);

const Returns = [
  {'save': Object}
, {'insert': Object}
, {'create': Object}
, {'update': Object}
, {'remove': Object}
];

function testReturn(action, data) {
  console.log('action', action, data)
};

// Create: save
// Verifica se veio como Object
// Roda o teste primitivo para Object
// Deve retornar o mesmo objeto do Schema acrescido de:
// _id
// __v
// Verificar cada valor persistido

// var saveReturn = { __v: 0,
//   _id: "",
//   created_at: "",
//   category: '""',
//   price: "",
//   alcohol: "",
//   description: "",
//   name: "" }


// Retrieve: find
// armazena o count() da coleção
// Verifica se veio como Array
// Roda o teste primitivo para Array
// Verifica a quantidade de registros retornados




