'use strict'

const fs = require('fs');


fs.rename('./eufuiCriadoComNode/', './eufuiRenomeadoComNode', (err) => {
  if (err) throw err;
});
