'use strict';

module.exports = (err, data, res) => {
  if (err) return console.log('Erro:', err);
  console.log('action callback')
  res.writeHead(200, {'Content-Type': 'application/json'});
  return res.end(JSON.stringify(data));
};
