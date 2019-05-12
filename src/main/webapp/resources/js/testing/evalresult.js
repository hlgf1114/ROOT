var as = angular.module('evaluatelist',[]);

as.controller('evaluatelistctrl', function($scope,$http) {
	
	
	$scope.exit = function(){
		location.href =  "/main";
    }
	$scope.myPage = function(){
		location.href =  "/mypage";
    }
	$scope.final = function(){
		location.href =  "finaleval";
    }
	
	
	$scope.team = [ 
		{id : "1팀"},
		{id : "2팀"},
		{id : "3팀"},
		{id : "4팀"},
		{id : "5팀"},
		{id : "6팀"}
	];
	$scope.responsibility = function(row){
		console.log(row)
		
	};
	$scope.pro = [
		{id : "1팀", progress :"진행중" , name : "1팀", result : "통과"},
		{id : "2팀",progress :"완료" , name : "김정길", result : "보류"},
		{id : "3팀",progress :"진행중" , name : "송은지", result : "탈락"},
		{id : "4팀",progress :"완료" , name : "몰라" , result : "통과"},
		{id : "5팀",progress :"진행중" , name : "암거나", result : "탈락"},
		{id : "6팀",progress :"진행중" , name : "사람" , result : "보류"}
	];
	
	
	
	
});
