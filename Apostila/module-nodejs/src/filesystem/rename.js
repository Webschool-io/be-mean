/**
 * rename
 */
 

var fs = require('fs');


fs.rename('./eufuiCriadoComNode/', './eufuiRenomeadoComNode', function (err) {
  if (err) throw err;
});
