'use strict'

const PokemonModel = require('./model')

const callback = function (err, data, res) {
  if (err) return console.log('ERRO: ', err)
  return res.json(data)
};

const Actions = {}
Actions.listar = (req, res) => {
  const query = {}
  PokemonModel.find(query, (err, data) => {
    callback(err, data, res)
  });
}
Actions.consultar = (req, res) => {
  const query = {_id: req.params.id}
  PokemonModel.findOne(query, (err, data) => {
    callback(err, data, res)
  });
}
Actions.alterar = (req, res) => {
  const query = {_id: req.params.id}
  const body = req.body
  PokemonModel.update(query, body, (err, data) => {
    callback(err, data, res);
  });
}
Actions.remover = (req, res) => {
  const query = {_id: req.params.id}
  PokemonModel.remove(query, (err, data) => {
    callback(err, data, res);
  });
}
Actions.cadastrar = (req, res) => {
  const body = req.body
  const poke = new PokemonModel(body)
  poke.save((err, data) => {
    callback(err, data, res)
  });
}

module.exports = Actions
