'use strict';

const CONFIG = require('./../config');
const ORGANISM_NAME = 'User';
const MOLECULE_PATH_BASE = CONFIG.MOLECULE_PATH_BASE;
const MOLECULE_PATH = MOLECULE_PATH_BASE+ORGANISM_NAME.toLowerCase();
const MOLECULE = require(MOLECULE_PATH);

module.exports = require(CONFIG.ORGANISM_FACTORY)(ORGANISM_NAME, MOLECULE);
