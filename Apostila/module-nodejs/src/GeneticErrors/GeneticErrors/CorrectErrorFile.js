module.exports = (_file) => {

  // Verificar antes se já nao existe essa linha que será adicionada
  // Se existir é pq o móodulo só não foi instalado
  // Nesse caso pode pular esse passo
  const module = 'mongoose';
  const correction = "const mongoose = require('"+ module +"');";

  if(_file.indexOf(correction) >= 0) {
    // não adiciona o código
    // apenas instala localmente o modulo caso esse ainda nao tenha sido instalado
    return _file;
  } 
  const FileCorrected = correction+"\r\n"+_file;
  console.log('corrigido', FileCorrected);
  return FileCorrected;
};