var finalApp = angular.module('finalEval',[]);

finalApp.controller('FinalEvalCtrl', function($scope,$http) {
	
	$scope.exit = function(){
		location.href =  "/testing/evalresult";
    }
	$scope.setEvalSetting = function(){
		location.href =  "/main";
    }
	
	$scope.finalselect = {
			final : 0
			
	};
	$scope.advice ={
			opinion : " "
	}
	$scope.teamname = "5조";
	
	$scope.user = [
			{ name : "학생1" },
			{ name : "학생2" },
			{ name : "학생3" },
			{ name : "학생4" }
	];
	$scope.evaluateList = [
		{ name : "교수1", score : 80 , result : "통과"},
		{ name : "교수2", score : 54 , result : "보류" },
		{ name : "교수3", score : 30 , result : "탈락" }
		
	];
});
