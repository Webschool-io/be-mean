'use strict';

var http = require('http');

// var fazReqAsync = function(options) {
  var options = {
    host: 'http://cors-server.getup.io',
    path: '/url/api.redtube.com/?data=redtube.Videos.searchVideos&search=Sasha%20Gray',
  };

  var callback = function(response) {
    var str = '';

    //another chunk of data has been recieved, so append it to `str`
    response.on('data', function (chunk) {
      str += chunk;
    });

    //the whole response has been recieved, so we just print it out here
    response.on('end', function () {
      console.log(str);
    });
  }

  http.get(options, callback).end();
// }

// var promise = new Promise(function(resolve, reject) {
//   var options = {
//     host: 'http://cors-server.getup.io',
//     path: '/url/api.redtube.com/?data=redtube.Videos.searchVideos&search=Sasha%20Gray',
//   };

//   var callback = function(response) {
//     var str = '';

//     response.on('data', function (chunk) {
//       str += chunk;
//     });

//     response.on('end', function () {
//       console.log(str);
//       resolve("Suuuuuuuuuucesso!");
//     });
//   }

//   http.get(options, callback).on('error', reject(Error("Fudeu!")));
//   process.exit(0);
// });

// promise.then(function(result) {
//   console.log('PROMISES SUCESSO', result); // "Suuuuuuuuuucesso!"
// }, function(err) {
//   console.log('PROMISES ERRO', err); // Error: "Fudeu"
// });