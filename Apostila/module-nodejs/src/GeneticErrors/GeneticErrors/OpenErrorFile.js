const fs = require('fs');

module.exports = (file) => {
  const _file = fs.readFileSync(file, 'UTF-8');
  // console.log('_file: ', _file);
  var newFile = require('./CorrectErrorFile')(_file);
  // var _fileNew = '' + _file;
  // console.log('open', newFile);
  return newFile;
};