module.exports = (msgFile) => {
  const file = '/home/suissa/www/be-mean-instagram/Apostila/module-nodejs/src/mongoose/schemas/teste.js';
  Error.path = file;
  if(file)
    return file;
  return false;
};