var evalfinal = angular.module('evalfinal', []);


evalfinal.controller('evalfinalCtrl', function($scope, $http) {
	
	$scope.teamId = {};
	$scope.teamInfo ={};
	
	$scope.exit = function() {
		location.href = "/mypage";
	}

	$scope.getData = function(){
		$http({method: 'GET', url:"/mypage/studentSelect"})
		.success(function (data, status, headers, config) {
			console.log(data);
			$scope.info = data;	
			
			return 	$scope.getTeamEval();
		})
		.error(function (data, status, header, config) {
			console.log(data);
			$scope.info= {};
		});
	}
	$scope.getData();
	

	$scope.getTeamEval = function() {
		
		$scope.teamId = {
				team_id : $scope.info.team_id
		};
		console.log($scope.teamId);
		
		$http({method: 'POST', url:"/testing/getTeamEval", params: $scope.teamId})
		.success(function (data, status, headers, config) {
			$scope.teamInfo = data;
			console.log($scope.teamInfo);
			
			return $scope.getEvalList();
		})
		.error(function (data, status, header, config) {
			console.log(data);
		});
	}
	
	$scope.evalList = {};
	$scope.getEvalList = function() {
		$http({method: 'POST', url:"/testing/getEvalList", params: $scope.teamId})
		.success(function (data, status, headers, config) {
			$scope.evalList = data;
			console.log($scope.evalList);
			
			return $scope.getTeamInfo();
		})
		.error(function (data, status, header, config) {
			console.log(data);
		});
	}
	
	$scope.getTeamInfo = function() {
		
		$http({method: 'POST', url:"/testing/getTeamInfo", params: $scope.info})
		.success(function (data, status, headers, config) {
			console.log(data);
			
			$scope.teamInfo = data;
			
			return $scope.finalPass();
		})
		.error(function (data, status, header, config) {
			console.log(data);
		});
	}
	
	
	$scope.getEvalScore = function(row) {
		var getScore = 0;
		getScore += row["article1"];
		getScore += row["article2"];
		getScore += row["article3"];
		getScore += row["article4"];
		getScore += row["article5"];
		getScore += row["article6"];
		getScore += row["article7"];
		
		return getScore;
	}
	
	$scope.checkPass = function(row) {
		var check = $scope.getEvalScore(row)
		
		if(check >= 54)
			return "합격";
		else if(check >= 45)
			return "재심사";
		else
			return "불합격";
	}
	
	$scope.finalPass = function() {
		if($scope.info.eval_end == 1)
			return "합격";
		else if($scope.info.eval_end == 2)
			return "재심사";
		else
			return "불합격";
	}
	
	$scope.finalOpinion = function() {
		return $scope.info.eval_end_comm;
	}
});
