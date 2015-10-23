'use strict';

const ACTIONS_FOLDER = './actions/'
		,	ROUTES_FOLDER = './routes/'
		, ACTIONS = ['create', 'retrieve', 'update', 'delete']
		;
let Routes = [];

ACTIONS.forEach( action => {
  let Action = require(ACTIONS_FOLDER + 'action.'+ action +'.js');
  let Config = require(ROUTES_FOLDER + 'route.'+ action +'.config');
  let Route = require(ROUTES_FOLDER + 'route.default.js')(Action, Config);
  Routes.push(Route);
});

module.exports = Routes;
