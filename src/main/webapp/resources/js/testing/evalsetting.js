var evalApp = angular.module('evalSetting',[]);

evalApp.controller('EvalSetCtrl', function($scope,$http) {
	
	$scope.exit = function(){
		location.href =  "mypage/professor";
    }
	$scope.setEvalSetting = function(){
		location.href =  "/main";
    }
	
	$scope.team = [
		{name : "1팀"},
		{name : "2팀"},
		{name : "3팀"},
		{name : "4팀"},
		{name : "5팀"},
		{name : "6팀"}
	];
	$scope.pro = [
		{name : "김점구"},
		{name : "김정길"},
		{name : "송은지"},
		{name : "몰라"},
		{name : "암거나"},
		{name : "사람"},
		{name : "사람"},
		{name : "사람"},
		{name : "사람"},
		{name : "사람"},
		{name : "사람"},
		{name : "사람"},
		{name : "사람"},
		{name : "사람"},
		{name : "사람"},
		{name : "사람"},
		{name : "사람"},
		{name : "사람"},
		{name : "사람"}
	];
	
	
});
