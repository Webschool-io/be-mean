(function(){
angular.module("rschool")
  .directive("navbarTop", function(){
    var directive = {};
    directive.restrict = "EA";

    directive.templateUrl = "../../components-html/navbartop.html"
    return directive;
  });
})();
