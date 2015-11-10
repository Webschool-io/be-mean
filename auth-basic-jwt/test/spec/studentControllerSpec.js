describe("StudentCtrl", function(){ 
	var $scope
	  , $http
  ;

	beforeEach(function(){
		module("rschool");
		inject(function($httpBackend, $injector){
			$scope = $injector.get("$rootScope").$new();
			$http = $httpBackend;
			$http.when("GET", "/students/1")
			.respond({_id:"1"});
			$http.when("GET", "/students")
			.respond([{}]);
		})
	});

		it("should save when the post was made or list when get if the _id to be empty"
		, inject(function($controller){
				var vm = $controller("StudentCtrl", {
					"$scope": $scope
				});
				$http.flush();

				expect(vm.student._id).toBeUndefined();
	}));

		it("should update a data student when an _id passed as parameter"
		, inject(function($controller){
	      var vm = $controller("StudentCtrl", {
					"$scope": $scope,
					"$routeParams": { studentId: 1 }
				});

				$http.flush();
				expect(vm.student._id).toBeDefined();
	}));
});
