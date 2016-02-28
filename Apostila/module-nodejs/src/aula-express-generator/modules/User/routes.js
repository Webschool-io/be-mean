'use strict';

const Controller = require('./organisms/organism-crud-user');
const routes = [{
      action: 'create'
    , method: 'post'
    , url: '/'
    , callback: Controller.create
    }
  , {
      action: 'retrieve'
    , method: 'get'
    , url: '/'
    , callback: Controller.retrieve
  }
  , {
      action: 'get'
    , method: 'get'
    , url: '/:id'
    , callback: Controller.get
  }
  , {
      action: 'update'
    , method: 'put'
    , url: '/:id'
    , callback: Controller.update
  }
  , {
      action: 'delete'
    , method: 'delete'
    , url: '/:id'
    , callback: Controller.delete
  }
];

module.exports = (Router) => {
  routes.forEach( (element, index) => {
    Router[element.method](element.url, (req, res) => {
      res.send(element);
    })
  });
  return Router;
};



