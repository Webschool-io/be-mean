'use strict';

function promiseAll (arr) {
  return Promise.all(arr)
  .then(function success(res){
    return res.map(a => JSON.parse(a))
    .reduce((init,actual) => { 
      init = init.concat(actual)
      return init; 
    },[]);
  })
  .catch(function error(err) {
    throw err; 
  });
}

module.exports = promiseAll;
