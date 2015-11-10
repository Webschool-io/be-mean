(function(){
angular.module("rschool.components")	
	.directive("navbarTop", function(){
		var directive = {};
		directive.restrict = "EA";

		directive.templateUrl = "../../components-html/navbartop.html" 
		return directive;
	});
})();
