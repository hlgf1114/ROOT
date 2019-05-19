var evalfinal = angular.module('evalfinal', []);


evalfinal.controller('evalfinalCtrl', function($scope, $http) {
	
	$scope.exit = function() {
		location.href = "/mypage";
	}
	
	$scope.evalview = function() {
		location.href = "/testing/evalread";
	}
	$scope.evalList = [
		{name : "김점수", final : "통과 "},
		{name : "김정길", final : "보류 "},
		{name : "송은지", final : "탈락 "}
	];
	$scope.opinion = "나쁘지는 않았지만 뭔가가 모자르다";
	$scope.pass = "불합격";
	$scope.teamname="1조";
	$scope.user=[
		{name : "승빈"},
		{name : "태근"}
	];
});
