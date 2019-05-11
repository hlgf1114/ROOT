var evalApp = angular.module('evalSetting',[]);

evalApp.controller('EvalSetCtrl', function($scope,$http) {
	
	$scope.exit = function(){
		location.href =  "/mypage";
    }
	$scope.setEvalSetting = function(){
		location.href =  "/main";
    }
	
	$scope.teamList = {};
	$scope.selectTeamAll = function () {
		$http({method: 'POST', url:"/testing/selectTeamAll"})
		.success(function (data, status, headers, config) {
			$scope.teamList = data;
			console.log($scope.teamList);
		})
		.error(function (data, status, header, config) {
			console.log(data);
		});
	}
	$scope.selectTeamAll();
	
	$scope.profList = {};
	$scope.selectProfAll = function () {
		$http({method: 'POST', url:"/testing/selectProfAll"})
		.success(function (data, status, headers, config) {
			$scope.profList = data;
			console.log($scope.teamList);
		})
		.error(function (data, status, header, config) {
			console.log(data);
		});
	}
	$scope.selectProfAll();
	
	
});
