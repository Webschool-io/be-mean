'use strict'

const fs = require('fs');

// async
fs.mkdir('./eufuiCriadoComNode', function (err, result) {
  if (err) throw err;
  console.log(result);
});

fs.mkdir('./criadoAssincronamenteComNode');
