/**
 * async, sync
 */

var fs = require('fs');


fs.mkdir('./eufuiCriadoComNode', function (err, result) {
  if (err) throw err;
  console.log(result);
});

fs.mkdir('./criadoAssincronamenteComNode');
