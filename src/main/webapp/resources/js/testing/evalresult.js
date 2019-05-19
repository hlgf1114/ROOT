var as = angular.module('evaluatelist',[]);

as.controller('evaluatelistctrl', function($scope,$http) {
	
	
	$scope.exit = function(){
		location.href =  "/main";
    }
	$scope.myPage = function(){
		location.href =  "/mypage";
    }
	$scope.final = function(){
		console.log($scope.selectedTeam);
		location.href =  "finaleval?team_id=" + $scope.selectedTeam.team_id;
    }
	
	$scope.selectedTeamList = {};
	
	// 팀을 불러온다.
	$scope.getEvalList = function(row) {
		console.log(row);
		$scope.selectedTeam = row;
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
	
	$scope.detail = function(row) {
		location.href = "/testing/evalread?eval_team_no=" + row.eval_team_no;
	}
	
	
	
});
