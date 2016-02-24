module.exports  = (error) => {
  // console.log('file ReadErrorType', error);
  // Testando apenas erro de modulo faltante
  const types = ['Error'];
  const type_index = error.indexOf('Error: '); 
  // console.log('type_index', type_index);
  if(type_index >= 0)
    return 'MissingModule';
  return false;
}