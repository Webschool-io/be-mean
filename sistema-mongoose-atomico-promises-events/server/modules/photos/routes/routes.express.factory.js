const express = require('express');
const Router = express.Router();

var Route = {
}

var ROUTE = function(routes) {
  return {
    router: Router

  , isNull: function(Routes) {
      return (Routes.router === {} || Routes.router === null || Routes.router === undefined)
    }
  , createRoute: function(element, index, array) {
      return ROUTE.router[element.method](element.url, element.callback);
    }
  , createModuleRoutes: function(router, routes) {
      // default Express
      if(router) {
        ROUTE.router = router;
      }
      if(this.isNull(routes))
        return false;
      return routes.forEach(ROUTE.createRoute);
    }
  }
}

const RoutesExpress = function(RoutesConfig) {
  var Route = ROUTE(RoutesConfig);
  return Route.createModuleRoutes(Route.router, RoutesConfig);
}

// ROUTE.router['get']('/', function() {
//   console.log('manual');
// });

module.exports = ROUTE.router;