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
	
	$scope.selectedTeamList = {};
	
	// 팀을 불러온다.
	$scope.getEvalList = function(row) {
		console.log(row);
		$http({method: 'POST', url:"/testing/getEvalList", params: row})
		.success(function (data, status, headers, config) {
			console.log(data);
			$scope.selectedTeamList = data;
		})
		.error(function (data, status, header, config) {
			console.log(data);
		});
	}
	
	$scope.teamList = {};
	$scope.getTeamList = function() {
		$http({method: 'POST', url:"/testing/selectTeamAll"})
		.success(function (data, status, headers, config) {
			console.log(data);
			$scope.teamList = data;
		})
		.error(function (data, status, header, config) {
			console.log(data);
		});
	}
	$scope.getTeamList();
	
	$scope.getResultEval = function(row) {
		var score = 0;
		
		score += row.article1;
		score += row.article2;
		score += row.article3;
		score += row.article4;
		score += row.article5;
		score += row.article6;
		score += row.article7;
		
		if(score >= 54)
			return "합격";
		else if(score >= 45)
			return "재심사";
		else
			return "불합격";
		
	}
	
	
	$scope.logging = function(row){
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
