
angular.module('User', [])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/users', {
        templateUrl: 'views/users-list.html',
        controller: 'UserController',
        controllerAs: 'User'
      })
      .when('/users/:id', {
        templateUrl: 'views/users-details.html',
        controller: 'UserDetailsController',
        controllerAs: 'UserDetails'
      });
  }])
  .controller('UserController', UserController)
  .controller('UserDetailsController', UserDetailsController);


function UserController() {
  var vm = this;
  vm.editing = false;
  vm.reverse = false;
  vm.modelOptions = {
    updateOn: 'blur default'
  , debounce: {
      default: 1000
    , blur: 0
    }
  }
  var _users = [
    {name: 'Suissa', email: 'suissera@manoveio.com', type: 'teacher', active: true}
  , {name: 'João', email: 'joao@macioesedoso.com', type: 'student', active: false}
  , {name: 'Franciele', email: 'fran@quimica.com', type: 'teacher', active: false}
  , {name: 'Maria', email: 'm@gmail.com', type: 'student', active: true}
  , {name: 'José', email: 'js@gmail.com', type: 'student', active: true}
  ];

  vm.users = _users;
  // console.log('vm.users INCIAL:', vm.users)

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

  function getKeyLength() {
    return Object.keys(angular.copy(vm.users[0])).length;
  }
  vm.keysLength = getKeyLength();

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
    // console.log('submitForm', user)
    add(user);
  }
}


function UserDetailsController($routeParams) {
  var vm = this;
  vm.routeParams = $routeParams;
  vm.editing = false;
  vm.reverse = false;
  vm.modelOptions = {
    updateOn: 'blur default'
  , debounce: {
      default: 1000
    , blur: 0
    }
  }
  vm.users = [
    {name: 'Suissa', email: 'suissera@manoveio.com', type: 'teacher', active: true}
  , {name: 'João', email: 'joao@macioesedoso.com', type: 'student', active: false}
  , {name: 'Franciele', email: 'fran@quimica.com', type: 'teacher', active: false}
  , {name: 'Maria', email: 'm@gmail.com', type: 'student', active: true}
  , {name: 'José', email: 'js@gmail.com', type: 'student', active: true}
  ];

  function getKeyLength() {
    return Object.keys(angular.copy(vm.users[0])).length;
  }
  vm.keysLength = getKeyLength();

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
    vm.users.push(angular.copy(user));
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
}