var evaluateRead = angular.module('evaluateRead',[]);

evaluateRead.controller('evaluateReadCtrl', function($scope,$http) {
	
	$scope.exit = function(){
		location.href =  "/main";
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
		})
		.error(function (data, status, header, config) {
			console.log(data);
		});
	}
	$scope.getEvalInfo();
	
});
