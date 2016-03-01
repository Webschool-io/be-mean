'use strict';

const ORGANISM_NAME = 'User';
const Molecule = require('./../molecules/molecule-user');

module.exports = require('./organism-factory')(ORGANISM_NAME, Molecule);
