'use strict';

const express = require('express');
const Router = express.Router();

const Actions = require('./organisms/organism-actions');
const routes = [
    {
      action: 'create'
    , method: 'post'
    , path: '/'
    , callback: Actions.create
    }
  , {
      action: 'retrieve'
    , method: 'get'
    , path: '/'
    , callback: Actions.find
    }
  , {
      action: 'get'
    , method: 'get'
    , path: '/:id'
    , callback: Actions.findOne
  }
  , {
      action: 'update'
    , method: 'put'
    , path: '/:id'
    , callback: Actions.update
  }
  , {
      action: 'delete'
    , method: 'delete'
    , path: '/:id'
    , callback: Actions.remove
  }
];

routes.forEach( route => {
  Router[route.method](route.path, route.callback);
});

module.exports = Router;


