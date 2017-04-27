'use strict';

require('./db/config');
const CRUD = require('./pokemon-controller');
const query = { name: /atomicmon/i };
const data = { name: 'Atomicmon',
  description: "Vai que vai",
  type: "terra",
  attack: 69,
  defense: 96,
  height: 0.7
}
const mod = { attack: 51 };

CRUD.delete(query);
