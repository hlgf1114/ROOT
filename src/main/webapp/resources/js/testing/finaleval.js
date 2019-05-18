var finalApp = angular.module('finalEval',[]);

finalApp.controller('FinalEvalCtrl', function($scope,$http) {
	
	
	$scope.eval_end = 0;
	$scope.eval_comm = "";
	
	$scope.checkSend = {};
	
	$scope.teamId = {};
	$scope.teamInfo ={};
	$scope.getTeamEval = function() {
		var href = location.href;
		var params = href.substring(href.indexOf("?") + 1, href.length);
		var value = params.split("=")[1];
		$scope.teamId = {
				team_id : value
		};
		console.log($scope.teamId);
		
		$http({method: 'POST', url:"/testing/getTeamEval", params: $scope.teamId})
		.success(function (data, status, headers, config) {
			$scope.teamInfo = data;
			console.log($scope.teamInfo);
		})
		.error(function (data, status, header, config) {
			console.log(data);
		});
	}
	$scope.getTeamEval();
	
	$scope.evalList = {};
	$scope.getEvalList = function() {
		$http({method: 'POST', url:"/testing/getEvalList", params: $scope.teamId})
		.success(function (data, status, headers, config) {
			$scope.evalList = data;
			console.log($scope.evalList);
		})
		.error(function (data, status, header, config) {
			console.log(data);
		});
	}
	$scope.getEvalList();
	
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
	$scope.sendFinalEval = function() {
		var selected = confirm("이대로 평가를 저장하겠습니까?");
		if(selected) {
			var params = $scope.teamId;
			params.eval_end = $scope.eval_end;
			params.eval_end_comm = $scope.eval_comm;
			console.log(params);
			$http({method: 'POST', url:"/testing/sendFinalEval", params: params})
			.success(function (data, status, headers, config) {
				$scope.checkSend = data;
				console.log($scope.checkSend);
				
				location.href ="/testing/evalresult";
			})
			.error(function (data, status, header, config) {
				console.log(data);
			});
			
//			location.href = "/eval"
		}
	}
	
	$scope.exit = function(){
		location.href =  "/testing/evalresult";
    }
	
	
	
	
});
