'use strict'


module.exports = (Actions) => {
  const Routes = [
    {
      method: 'get',
      path: '/',
      action: Actions.listar
    },
    {
      method: 'get',
      path: '/:id',
      action: Actions.consultar
    },
    {
      method: 'put',
      path: '/:id',
      action: Actions.alterar
    },
    {
      method: 'delete',
      path: '/:id',
      action: Actions.remover
    },
    {
      method: 'post',
      path: '/',
      action: Actions.cadastrar
    }
  ]
  return Routes
}
