/**
 * Open async
 */
var fs = require('fs');



fs.open('./hello.txt', 'r', function (err, data) {
  if (err) throw err;
  console.log(data.toString());
});
