// route.default.js
var Route = function(Action, RouteConfig) {
  const ACTION = RouteConfig.action;
  const METHOD = RouteConfig.method;
  const URL = RouteConfig.url;
  var CALLBACK = function(req, res) {
    Action.ACTION(req, res);
  }
  return {
      action: ACTION
    , method: METHOD
    , url: URL
    , callback: CALLBACK
  };
}
module.exports = Route;
