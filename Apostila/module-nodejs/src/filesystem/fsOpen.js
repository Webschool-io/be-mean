'use strict'

const fs = require('fs');

// async
fs.open('./hello.txt', 'r', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
