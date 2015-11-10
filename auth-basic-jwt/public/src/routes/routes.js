(function(){
	angular.module("rschool.routes")
	.config(["$routeProvider", "$httpProvider", function($routeProvider, $httpProvider){

		$httpProvider.interceptors.push("UserInterceptor");

		$routeProvider
		.when("/",{
			 controller: "StudentCtrl",
			 controllerAs: "studentCtrl",
			 templateUrl: "../../views/student-list.html"
		})
		.when("/student-create", {
			controller: "StudentCtrl",
			controllerAs: "studentCtrl",
			templateUrl: "../../views/student-create.html"
		})
		.when("/student/:studentId", {
			controller: "StudentCtrl",
			controllerAs: "studentCtrl",
			templateUrl: "../../views/student-create.html"
		})
		.when("/login", {
			controller: "UserCtrl",
			controllerAs: "userCtrl",
			templateUrl: "../../views/login.html"
		})
		.when("/logout", {
			controller: "UserCtrl",
			controllerAs: "userCtrl",
			templateUrl: "../../views/login.html"
		})
		.when("/class", {
			controller: "LessonCtrl",
			controller: "lessonCtrl",
			templateUrl: "../../views/class-create.html"
		})
		.when("/user-create", {
			controller: "UserCtrl",
			controllerAs: "userCtrl",
			templateUrl: "../../views/user-create.html"
		})
		.when("/student-profile/:studentId", {
			controller: "StudentCtrl",
			controllerAs: "studentCtrl",
			templateUrl: "../../views/student-profile.html"
		});

		$routeProvider.otherwise("/login");
	}]);
})();
