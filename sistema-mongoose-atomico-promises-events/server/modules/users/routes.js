const ACTIONS_FOLDER = './actions/';
const ROUTES_FOLDER = './routes/';
const ACTIONS = ['create', 'retrieve', 'update', 'delete'];
var Routes = [];

ACTIONS.forEach(function(action) {
  const Action = require(ACTIONS_FOLDER + 'action.'+ action +'.js');
  const Config = require(ROUTES_FOLDER + 'route.'+ action +'.config');
  const Route = require(ROUTES_FOLDER + 'route.default.js')(Action, Config);
  Routes.push(Route);
});

module.exports = Routes;
