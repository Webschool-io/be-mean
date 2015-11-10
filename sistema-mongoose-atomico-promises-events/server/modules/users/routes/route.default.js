// route.default.js
var Route = function(Action, RouteConfig) {
  var ACTION = RouteConfig.action;
  var METHOD = RouteConfig.method;
  var URL = RouteConfig.url;
  var CALLBACK = function(req, res) {
    Action[ACTION](req, res);
  }
  return {
      action: ACTION
    , method: METHOD
    , url: URL
    , callback: CALLBACK
  };
}
module.exports = Route;
