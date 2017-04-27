'use strict';

const router = require('./routerExpress')
const Actions = require('./actions')
const Routes = require('./routes')(Actions)
const Router = require('./routesExpress')(Routes, router)

module.exports = Router;
