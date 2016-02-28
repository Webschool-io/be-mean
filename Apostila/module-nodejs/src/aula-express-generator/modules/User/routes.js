'use strict';


const express = require('express');
const Router = express.Router();

const Controller = require('./organisms/organism-crud-user');
const routes = [
    {
      action: 'create'
    , method: 'post'
    , path: '/'
    , callback: Controller.create
    }
  , {
      action: 'retrieve'
    , method: 'get'
    , path: '/'
    , callback: Controller.find
    }
  , {
      action: 'get'
    , method: 'get'
    , path: '/:id'
    , callback: Controller.findOne
  }
  , {
      action: 'update'
    , method: 'put'
    , path: '/:id'
    , callback: Controller.update
  }
  , {
      action: 'delete'
    , method: 'delete'
    , path: '/:id'
    , callback: Controller.remove
  }
];

routes.forEach( (route, index) => {
  Router[route.method](route.path, route.callback);
});

module.exports = Router;


