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

// save
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

// save
// { __v: 0,
//   _id: 560b790c5747b5491c662170,
//   created_at: Wed Sep 30 2015 02:54:20 GMT-0300 (BRT),
//   category: 'pilsen',
//   price: 3,
//   alcohol: 4.5,
//   description: 'Mijo de rato',
//   name: 'Skol' }