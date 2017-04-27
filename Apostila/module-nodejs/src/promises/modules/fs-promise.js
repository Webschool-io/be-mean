'use strict';

const fs =  require('fs');

function readFile (path) {
  return new Promise(function(resolve, reject) {
    fs.readFile(path,'utf8',function(err, res) {
      err ? reject(err) : resolve(res);
    });    
  });
}

module.exports = readFile;
