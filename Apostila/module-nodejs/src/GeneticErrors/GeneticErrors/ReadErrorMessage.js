module.exports = (error) => {

  // como se tivesse lido corretamente
  const ErrorMessage = "Error: Cannot find module 'mongoose'";
  const ErrorType = require('./ReadErrorType')(ErrorMessage);
  const ErrorObject = require('./ReadErrorObject')(ErrorMessage);
  const ErrorFile = require('./ReadErrorFile')(ErrorMessage);

  const AnalyzeError = require('./AnalyzeError')(ErrorMessage, ErrorType, ErrorObject, ErrorFile);
  console.log('ErrorType', ErrorType);
  const newFile = require('./OpenErrorFile')(ErrorFile);
  const Saved = require('./SaveErrorFile')(newFile);
};
