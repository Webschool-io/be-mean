'use strict';

const ORGANISM_NAME = 'User';
const MOLECULE_PATH = './../molecules/molecule-user';
const MOLECULE = require(MOLECULE_PATH);

module.exports = require('./organism-factory')(ORGANISM_NAME, MOLECULE);
