// route.default.js
var Route = function(Action, RouteConfig) {
  console.log('Action', Action.toString());
  console.log('RouteConfig', RouteConfig);
  var ACTION = RouteConfig.action;
  var METHOD = RouteConfig.method;
  var URL = RouteConfig.url;
  var CALLBACK = function(req, res) {
    console.log("route.default callback");
    // Action[ACTION](req, res);
  }
  return {
      action: ACTION
    , method: METHOD
    , url: URL
    , callback: CALLBACK
  };
}
console.log('Route default', Route);
module.exports = Route;