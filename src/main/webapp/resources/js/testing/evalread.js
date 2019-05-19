var evaluateRead = angular.module('evaluateRead',[]);

evaluateRead.controller('evaluateReadCtrl', function($scope,$http) {
	
	$scope.exit = function(){
		location.href =  "/testing/evalresult";
    }
	
	$scope.evalInfo = {};
	// 평가된 평가 정보의 고유 넘버 가져오기
	$scope.getEvalInfo = function() {
		var href = location.href;
		var params = href.substring(href.indexOf("?") + 1, href.length);
		var value = params.split("=")[1];
		$scope.params = {
				eval_team_no : value
		};
		console.log($scope.params);
		$http({method: 'POST', url:"/testing/getEvalInfo", params: $scope.params})
		.success(function (data, status, headers, config) {
			console.log(data);
			$scope.evalInfo = data;
			
			return $scope.getTeamInfo();
		})
		.error(function (data, status, header, config) {
			console.log(data);
		});
	}
	$scope.getEvalInfo();
	
	$scope.calcScore = function() {
		var score = 0;
		
		score += $scope.evalInfo.article1;
		score += $scope.evalInfo.article2;
		score += $scope.evalInfo.article3;
		score += $scope.evalInfo.article4;
		score += $scope.evalInfo.article5;
		score += $scope.evalInfo.article6;
		score += $scope.evalInfo.article7;
		
		return score;
	}
	

	$scope.getTeamInfo = function() {
		$http({method: 'POST', url:"/testing/getTeamInfo", params: $scope.evalInfo})
		.success(function (data, status, headers, config) {
			console.log(data);
			$scope.teamInfo = data;
			
			return 	$scope.getChargeProf();
		})
		.error(function (data, status, header, config) {
			console.log(data);
		});
	}
	
	$scope.getChargeProf = function() {
		$http({method: 'POST', url:"/testing/getChargeProf", params: $scope.evalInfo})
		.success(function (data, status, headers, config) {
			console.log(data);
			$scope.chargeProf = data;
		})
		.error(function (data, status, header, config) {
			console.log(data);
		});
	}
	
});
