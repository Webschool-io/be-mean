var express = require('express');
var router = express.Router();
const Routes = require('./routes');

function addRoute(route) {
  router[route.method](route.url, route.callback);
  // console.log(route.method, route.url, route.callback.toString());
}

Routes.forEach(addRoute);

// console.log('router', router);

module.exports = router;

// [ { action: 'create',
//     method: 'post',
//     url: '/',
//     callback: [Function] },
//   { action: 'retrieve',
//     method: 'get',
//     url: '/',
//     callback: [Function] },
//   { action: 'update',
//     method: 'update',
//     url: '/:id',
//     callback: [Function] },
//   { action: 'delete',
//     method: 'delete',
//     url: '/:id',
//     callback: [Function] } ]

