var evalSelect = angular.module('evalSel',[]);

evalSelect.controller('EvalSelCtrl', function($scope, $http, $q) {
	

	
	$scope.getData = function(){
		$http({method: 'GET', url:"/mypage/studentSelect"})
		.success(function (data, status, headers, config) {
			console.log(data);
			$scope.info = data;	
			
			return $scope.getEvalTeamList();
		})
		.error(function (data, status, header, config) {
			console.log(data);
			$scope.info= {};
		});
	}
	$scope.getData();
	
	$scope.teamList = {};
	$scope.getEvalTeamList = function() {
		$http({method: 'POST', url:"/testing/getEvalTeamList"})
		.success(function (data, status, headers, config) {
			console.log(data);
			$scope.teamList = data;
			
//			
			angular.forEach($scope.teamList, function(value, key) {
				$scope.checkEval(value).then(function(data) {
					if(data.count == 0)
						value.checked = "평가 안됨";
					else
						value.checked = "평가 했음";
				});
			});
			
//			console.log($scope.teamList);
		});
	}
	
	$scope.yes = {};
	$scope.checkEval = function(row) {
		row.uni_num = $scope.info.uni_num;
		var deferred = $q.defer();
		return $http({method: 'POST', url:"/testing/checkEval", params: row})
		.then(function (response) {
			return response.data;
			
		})
		
	}
	
	$scope.checked = function() {
		console.log($scope.yes);
		return $scope.yes;
	}
	
	$scope.evaluate = function(row){
		if(row.checked == "평가 했음") {
			alert("평가를 이미 하셨습니다.");
		}
		else
			location.href = "/testing/evaluate?team_id=" + row.team_id;
	}
	
	$scope.exit = function() {
		location.href = "/main";
	}

	
});