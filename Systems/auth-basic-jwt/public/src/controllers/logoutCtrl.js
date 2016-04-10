(function(){
  angular.module("rschool")
  .controller("logoutCtrl", function($localStorage, $scope, $location, UserStorage){
      $scope.logout = function(){
        UserStorage.signOut(function(){
          $location.path("/logout");
          console.log("deslogou");
        }, function(e){
          console.log(e);
        });
      }
  })
})();
