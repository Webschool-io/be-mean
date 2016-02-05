'use strict';

const expect = require('chai').expect;
const ctrl = require('./pokemon-controller');

describe('Controller of Pokemons', () => {
  const pokemon = {
    name        : 'Jean',
    description : 'Pokemonzudo S2',
    type        : 'Fire',
    attack      : 85,
    defense     : 85,
    height      : 1.80
  };

  after(done => {
    let Model = require('./pokemon-schema');
    Model.remove({});
    done();
  });

  describe('create a new polkemon', () => {
    it('exprect a new pokmeno has created', done => {
      ctrl.create(pokemon,(err,data) => {
        /*jshint expr: true*/
        expect(err).to.not.exist;
        expect(data._id).to.exist;
        expect(data.height).to.be.eq(1.8);
        expect(data.defense).to.be.eq(85);
        expect(data.attack).to.be.eq(85);
        expect(data.type).to.be.eq('Fire');
        expect(data.description).to.be.eq('Pokemonzudo S2');
        expect(data.name).to.be.eq('Jean');
        done();
      });
    });
  });
});
