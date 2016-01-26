const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema = {
  attacks:  Schema.Types.Mixed
}
// Criação do Schema
const pokemonSchema = new Schema(_schema);

const data = { attacks: 
  [
    { name: 'Soco na cara',
      power: 9000,
      order: 1,
      active: true,
      created_at: Date.now()
    },
    { name: 'Soco no peito',
      power: 9400,
      order: 2,
      active: false,
      created_at: Date.now()
    }
  ]
};

const Model = mongoose.model('pokemons', pokemonSchema);
const poke = new Model(data);
poke.save(function (err, data) {
  if (err) return console.log('ERRO: ', err);
  console.log('Inseriu: ', data)
})

module.exports = pokemonSchema;