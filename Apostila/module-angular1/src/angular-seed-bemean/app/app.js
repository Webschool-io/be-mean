'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute'
]).
config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
  $locationProvider.html5Mode(true);

  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });

  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}]);

angular.module('myApp').controller('View1Ctrl', [function() {}]);
angular.module('myApp').controller('View2Ctrl', [function() {}]);