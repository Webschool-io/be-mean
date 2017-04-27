const fs = require('fs');


const Error = (error) => {

  return require('./ReadErrorMessage')(error);
};


module.exports = Error;