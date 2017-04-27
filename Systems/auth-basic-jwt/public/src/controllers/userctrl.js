(function(){
  "use strict";
  angular.module("rschool").controller("UserCtrl", UserCtrl);

  UserCtrl.$inject = ["UserStorage", "$localStorage", "$location", "$window", "$scope"];

  function UserCtrl(UserStorage, $localStorage, $location, $window, $scope){
      var vm = this;
      vm.loginUser = loginUser;
      vm.saveUser = saveUser;
      vm.saveUser = saveUser;

      function loginUser() {
        var data = vm.userLogin;
        UserStorage.save(data, "/login", success, error);

         function success(res) {
            if(res.type == false){
              console.log(res);
              res.token;
            }
            else {
              console.log(res)
              $localStorage.token = res.token;
              $window.location = "/";
            }
         }

         function error(res) {
            vm.message = {
              type: "alert-danger",
              text: res.statusText + " - usuário ou senha inválida, por favor digite corretamente.",
              status: res.status
            }

            vm.userLogin = "";
         }

      };

    function saveUser() {
      var data = vm.user;
      UserStorage.save(data, "/users", success , error);

      function success(res){
        console.log(res);
        vm.message = {
          type: "alert-success",
          status: res.status,
          text: "Usuário salvo :), basta fazer o seu login."
        };
        vm.user = "";
      }

      function error(res) {
        console.log(res);
        vm.message = {
          type: "alert-danger",
          status: res.status,
          text: res.statusText
        };

        vm.user = "";
      }
    };
  };
})();
