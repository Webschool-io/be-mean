'use strict';

angular.module('User.Service', [])
.service('UserService', UserService);

// Service
function UserService($http) {
  var request = {
      url: 'http://localhost:3000/api/beers'
    , method: 'GET'
    }
  ;
  this.list = function(){
    return $http(request);
  }
};

