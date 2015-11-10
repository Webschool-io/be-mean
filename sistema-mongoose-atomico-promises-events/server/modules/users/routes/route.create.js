// route.create.js
var Route = function(Action) {
const ACTION = 'create';
const METHOD = 'post';
const URL = '/';
const CALLBACK = function(req, res) {
    var data = req.body;
    Action.create(req, res);
}
  return {
      action: ACTION
    , method: METHOD
    , url: URL
    , callback: CALLBACK
  };
}
module.exports = Route;