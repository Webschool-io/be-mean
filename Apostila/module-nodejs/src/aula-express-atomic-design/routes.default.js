// route.default.js
module.exports = (Action, RouteConfig) => {
  const ACTION = RouteConfig.action;
  const METHOD = RouteConfig.method;
  const URL = RouteConfig.url;
  const CALLBACK = function(req, res) {
    Action.ACTION(req, res);
  }
  return {
      action: ACTION
    , method: METHOD
    , url: URL
    , callback: CALLBACK
  };
}