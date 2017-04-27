
module.exports = (Routes, router) => {

  Routes.forEach( (route, index) => {
    router[route.method](route.path, route.action)
  });
  return router
}
