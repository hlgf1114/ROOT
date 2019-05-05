var scoreEval = angular.module('scoreEval', []);

scoreEval.controller('ScoreCtrl', ['$scope', function($scope) {
	
	// 변수
	$scope.article = {
			a1 : 0,
			a2 : 0,
			a3 : 0,
			a4 : 0,
			a5 : 0,
			a6 : 0,
			a7 : 0
	}
	
	$scope.evalSum = 0;
	$scope.getTotal = function() {
		var result = 0;
		angular.forEach($scope.article, function(value, key) {
			result += parseInt(value);
		})
		$scope.evalSum = result;
		console.log($scope.evalSum);
		return $scope.evalSum;
	}
}])