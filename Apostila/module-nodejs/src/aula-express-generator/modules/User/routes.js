'use strict';

// Agora falta importar o Organism

const Controller = require('./organisms/organism-crud-user');

module.exports = (Router) => {
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

  routes.forEach( (element, index) => {
    Router[element.method](element.url, (req, res) => {
      res.send(element);
    })
  });
  return Router;
};



