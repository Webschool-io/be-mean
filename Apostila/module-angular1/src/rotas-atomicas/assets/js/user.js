
function UserService($http) {
  const BASE_URL = 'http://localhost:3000/api/users/';

  this.list = function() {
    const request = {
      url: BASE_URL,
      method: 'GET'
    }
    return $http(request);
  }

  this.create = function(user) {
    const request = {
      url: BASE_URL,
      method: 'POST',
      data: user
    }
    return $http(request);
  }

  this.remove = function(user) {
    const request = {
      url: BASE_URL + user._id,
      method: 'DELETE'
    }
    return $http(request);
  }
  this.getRoutes = function() {
    const request = {
      url: 'routes.json',
      method: 'GET'
    }
    return $http(request);
  }
}

function UserCreateController (UserService) {
  var vm = this;

  vm.submitForm = submitForm;
  function submitForm(user) {
    console.log('submitForm', user);
    console.log('UserService', UserService);

    UserService
    .create(user)
    .success(function(data){
      console.log('CRIADO: ', data);
      vm.cadastrado = data;
    })
    .error(function(err){
      console.log('Erro: ', err);
      vm.erro = err;
    });
  }
}

function UserGithubController($http) {
  var vm = this;
  const user = 'suissa';
  const url = 'https://api.github.com/users/'+user;
  const method = 'GET';
  $http({
    url: url,
    method: method
  })
  .success(function(data){
    console.log('Data: ', data);
    vm.user = data;
  })
  .error(function(err){
    console.log('Erro: ', err);
  });
}
UserGithubController.$inject = ['$http'];

function UserController(UserService) {
  var vm = this;
  ((UserService) => {
    vm.users = [];
    vm.editing = false;
    vm.reverse = false;
    vm.modelOptions = {
      updateOn: 'blur default'
    , debounce: {
        default: 1000
      , blur: 0
      }
    }

    UserService
    .list()
    .success(function(data){
      console.log('Data: ', data);
      vm.users = data;
    })
    .error(function(err){
      console.log('Erro: ', err);
    });

    vm.orderByName = orderByName;
    function orderByName() {
      vm.predicate = 'name';
      vm.reverse = !vm.reverse;
    }
    vm.orderByEmail = orderByEmail;
    function orderByEmail() {
      vm.predicate = 'email';
      vm.reverse = !vm.reverse;
    }

    vm.remove = remove;
    function remove(user) {
      const filtrarUsuarioRemovido = function(el){
        return user._id != el._id;
      }
      if(confirm('Deseja REALMENTE remover esse usuário?')) {
        UserService
        .remove(user)
        .success(function(data){
          console.log('REMOVIDO: ', data);
          if(data.n == 1) vm.users = vm.users.filter(filtrarUsuarioRemovido);
        })
        .error(function(err){
          console.log('Erro: ', err);
        });
      }
      else alert('UFA! Ainda bem!');
    }
  })(UserService);
  // UserController.$inject = ['$http'];
}


function UserDetailsController($http, $routeParams) {
  var vm = this;
  vm.routeParams = $routeParams;
  vm.editing = false;
  vm.reverse = false;
  vm.users = [];

  const url = 'http://localhost:3000/api/users/'+$routeParams.id;
  const method = 'GET';
  $http({
    url: url,
    method: method
  })
  .success(function(data){
    console.log('Data: ', data);
    vm.user = data;
  })
  .error(function(err){
    console.log('Erro: ', err);
  });
}
UserController.$inject = ['$http', '$routeParams'];


const helloWorld = function () {
  return {
    restrict: 'AECM',
    replace: 'true',
    template: '<h3>Hello World!!</h3>'
  };
};


angular.module('User', [])
  .config(['$routeProvider', 'UserService', function($routeProvider, UserService) {

    UserService.getRoutes()
    .then((resolve) => {
      console.log('resolve', resolve)
      resolve.forEach( function(route, index) {
        $routeProvider.when(route.path, {
          templateUrl: route.view,
          controller: route.action,
          controllerAs: route.actionAs
        })
      });
    },
      (reject) => {
        console.log('DEU MERDA')
      })
    // const Routes = [
    //   {
    //     path: '/users',
    //     view: 'views/users-list.html',
    //     action: 'UserController',
    //     actionAs: 'User'
    //   },
    //   {
    //     path: '/users/create',
    //     view: 'views/users-list.html',
    //     action: 'UserController',
    //     actionAs: 'User'
    //   },
    //   {
    //     path: '/users/github',
    //     view: 'views/users-list.html',
    //     action: 'UserController',
    //     actionAs: 'User'
    //   },
    //   {
    //     path: '/users/:id',
    //     view: 'views/users-list.html',
    //     action: 'UserController',
    //     actionAs: 'User'
    //   }
    // ]
  }])
  .service('UserService', UserService)
  .directive('helloWorld', helloWorld)
  .controller('UserController', ['UserService', UserController])
  .controller('UserCreateController', ['UserService', UserCreateController])
  .controller('UserDetailsController', UserDetailsController)
  .controller('UserGithubController', UserGithubController);
