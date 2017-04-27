'use strict';

const express = require('express');
const app = express();

app.get('/file/:name', function (req, res, next) {

  let options = {
    root: __dirname + '/public/',
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true,
      'Webschool.io': 'FODA'
    }
  };

  let fileName = req.params.name;
  res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', fileName);
    }
  });
});

app.listen(3000, function () {
  console.log('Servidor rodando em locahost:3000');
});
