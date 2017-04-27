const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const name = require('./fields/fields-name');
const description = require('./fields/fields-description');
const type = require('./fields/fields-type');
const attack = require('./fields/fields-attack');
const defense = require('./fields/fields-defense');
const height = require('./fields/fields-height');
const created_at = require('./fields/fields-created_at');

const _schema = {
        name,
        description,
        type,
        attack,
        defense,
        height,
        created_at
      };
console.log(_schema);
module.exports = new Schema(_schema);