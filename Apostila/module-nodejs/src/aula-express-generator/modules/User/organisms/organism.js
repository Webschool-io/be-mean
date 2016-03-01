'use strict';

const CONFIG = require('./../config');
const ORGANISM_NAME = CONFIG.MODULE_NAME;
const MOLECULE_PATH = CONFIG.MOLECULE_PATH;
const MOLECULE = require(MOLECULE_PATH);

module.exports = require(CONFIG.ORGANISM_FACTORY)(ORGANISM_NAME, MOLECULE);
