module.exports  = (Error) => {
  // o type já será algo mais especifico como: MissingModule
  const type = 'MissingModule';
  switch(type){
    case 'MissingModule':

      return require('./AnalyzeErrorMissingModule')(Error);
      break;
    default: return false;
  }
}