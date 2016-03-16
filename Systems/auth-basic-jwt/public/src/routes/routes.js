(function(){
  angular.module("rschool", ["$localStorage"])
  .factory("authInterceptor", function($location, $q, $localStorage) {
    return {
      "request": function(config) {
        config.headers = config.headers || {};
        if($localStorage.token) {
          config.headers.authorization = $localStorage.token;
        }
        return config;
      },
      "responseError": function(response) {
        if(response.status === 401 || response.status === 403) {
          console.log(response);
          $location.path("/login");
        }
        return $q.reject(response);
      }
    };
  })
  .config(["$routeProvider", "$httpProvider", function($routeProvider, $httpProvider){

    $httpProvider.interceptors.push("authInterceptor");

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
