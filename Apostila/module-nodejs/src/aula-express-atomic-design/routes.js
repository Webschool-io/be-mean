'use strict';


module.exports = (Router) => {

  // const RoutesExpress = 
  const routes = [{
        action: 'create'
      , method: 'post'
      , url: '/'
      // , callback: cbCreate
      }
    , {
        action: 'retrieve'
      , method: 'get'
      , url: '/'
      // , callback: cbRetrieve
    }
    , {
        action: 'get'
      , method: 'get'
      , url: '/:id'
      // , callback: cbGet
    }
    , {
        action: 'update'
      , method: 'put'
      , url: '/:id'
      // , callback: cbUpdate
    }
    , {
        action: 'delete'
      , method: 'delete'
      , url: '/:id'
      // , callback: cbDelete
    }
  ];

  routes.forEach( (element, index) => {
     Router[element.method](element.url, (req, res) => {
      res.send(element);
     })
  });
  return Router;
};



