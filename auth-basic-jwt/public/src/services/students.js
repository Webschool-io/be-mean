angular.module("rschool.students", ["ngResource"])
.factory("Student",["$resource", function($resource){
	return $resource("/students/:id");
}]);
