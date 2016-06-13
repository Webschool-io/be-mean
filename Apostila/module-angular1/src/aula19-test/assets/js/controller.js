
angular.module('User', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/users', {
        templateUrl: 'views/users-list.html',
        controller: 'UserController',
        controllerAs: 'User'
      })
      .when('/users/create', {
        templateUrl: 'views/users-create.html',
        controller: 'UserCreateController',
        controllerAs: 'User'
      })
      .when('/users/github', {
        templateUrl: 'views/users-github.html',
        controller: 'UserGithubController',
        controllerAs: 'UserGithub'
      })
      .when('/users/:id', {
        templateUrl: 'views/users-details.html',
        controller: 'UserDetailsController',
        controllerAs: 'UserDetails'
      });
  }])
  .service('UserService', UserService)
  .controller('UserController', ['UserService', UserController])
  .controller('UserCreateController', UserCreateController)
  .controller('UserDetailsController', UserDetailsController)
  .controller('UserGithubController', UserGithubController)
;

// Service
function UserService($http) {
  var BASE_URL = 'http://localhost:3000/api/users/';
  this.list = function(){
  var request = {
        url: BASE_URL
      , method: 'GET'
      }
    ;

    return $http(request);
  }

  this.remove = function(user){
    var request = {
          url: BASE_URL + user._id
        , method: 'DELETE'
        }
      ;
    return $http(request);
  }

  this.get = function(id){
    var request = {
          url: BASE_URL + id
        , method: 'GET'
        }
      ;
    return $http(request);
  }

  this.create = function(user) {
    var request = {
          url: BASE_URL
        , method: 'POST'
        , data: user
        }
      ;
    return $http(request);
  }

  this.edit = function() {
    var request = {
      url: BASE_URL + $routeParams.id
    , method: 'PUT'
    }
    return $http(request);
  }
};


function UserController(UserService) {
  var vm = this;
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
console.log('UserService', UserService)
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
    console.log('user',user)
    // vm.users = vm.users.filter(function(el){ console.log('el', el); return el._id != user._id });
    if(confirm('Deseja REALMENTE remover esse usuário?')) {
      UserService
      .remove(user)
      .success(function(data){
        console.log('Removido: ', data);
        function filtraUsuarioRemovido(el){
          return el._id != user._id;
        };
        // Se removeu 1 usuário
        if(data.n === 1) {
          vm.users = vm.users.filter(filtraUsuarioRemovido);
        }
        // Lista dos usuários recebe apenas os usuários, el, que
        // possuem o _id diferente do usuário, user, que está sendo removido.
      })
      .error(function(err){
        console.log('Erro: ', err);
      });
    }
    else alert('UFA! Que bom!');
  }
}
// UserController.$inject = ['$http', 'UserService'];

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


function UserCreateController($http) {
  var vm = this;
  vm.save = save;
  function save(user) {
    var users = vm.users.map(function(el, i) {
      if(i === user.index) {
        delete user.index;
        return user;
      }
      return el;
    });
    vm.users = users;
    vm.editing = false;
  }

  vm.submitForm = submitForm;
  function submitForm(user) {
    console.log('submitForm', user);
    const url = 'http://localhost:3000/api/users';
    const method = 'POST';
    $http({
      url: url,
      method: method,
      data: user
    })
    .success(function(data){
      console.log('Data: ', data);
      vm.cadastrado = data;
    })
    .error(function(err){
      console.log('Erro: ', err);
      vm.erro = err;
    });
  }
}
UserCreateController.$inject = ['$http'];


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