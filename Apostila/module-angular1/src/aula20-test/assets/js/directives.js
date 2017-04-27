(function () {
  angular.module('Diretivas')
    .directive('helloWorld', helloWorld);

  var helloWorld = function () {
    return {
      restrict: 'AECM',
      replace: 'true',
      template: '<h3>Hello World!!</h3>'
    };
  };
}());