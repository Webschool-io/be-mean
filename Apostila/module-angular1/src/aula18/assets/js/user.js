
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
        controller: 'UserController',
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
  .controller('UserController', UserController)
  .controller('UserDetailsController', UserDetailsController)
  .controller('UserGithubController', UserGithubController);


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

function UserController($http) {
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

  const url = 'http://localhost:3000/api/users';
  const method = 'GET';
  $http({
    url: url,
    method: method
  })
  .success(function(data){
    console.log('Data: ', data);
    vm.users = data;
  })
  .error(function(err){
    console.log('Erro: ', err);
  });

  function getUsers() {
    if(Array.isArray(vm.users)) {
      console.log('JA EXISTE vm.users', vm.users)
      return vm.users;
    }
    else {
      console.log('Não existe vou mandar o padrão: ', _users)
      return _users;
    }
    // return Array.isArray(vm.users)? vm.users : _users;
  }

  // function getKeyLength() {
  //   return Object.keys(angular.copy(vm.users[0])).length;
  // }
  // vm.keysLength = getKeyLength();

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

  vm.add = add;
  function add(user) {
    console.log('add', user)
    vm.users.push(angular.copy(user));
    // console.log('vm.users.', vm.users)
    vm.form = {};
  }

  vm.remove = remove;
  function remove(users) {
    vm.users = users.filter(function(el){ return !el.selecionado });
  }

  vm.edit = edit;
  function edit(user, index) {
    vm.form = angular.copy(user);
    vm.form.index = index;
    vm.editing = true;
  }

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
      vm.users.push(data);
    })
    .error(function(err){
      console.log('Erro: ', err);
    });
  }
}
UserController.$inject = ['$http'];


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