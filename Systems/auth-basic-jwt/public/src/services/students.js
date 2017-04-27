angular.module("rschool", ["ngResource"])
.factory("Student",["$resource", function($resource){
  return $resource("/students/:id");
}]);
