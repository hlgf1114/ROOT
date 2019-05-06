var scoreEval = angular.module('scoreEval', []);

scoreEval.controller('ScoreCtrl', ['$scope', '$http', function($scope, $http) {
	
	// 개인정보 가져오기
	$scope.info = {};
	$scope.getData = function(){
		$http({method: 'GET', url:"/mypage/studentSelect"})
		.success(function (data, status, headers, config) {
			console.log(data);
			$scope.info = data;	
		})
		.error(function (data, status, header, config) {
			console.log(data);
			$scope.info= {};
		});
	}
	$scope.getData();
	
	
	// 변수
	$scope.article = {
			article1 : 0,
			article2 : 0,
			article3 : 0,
			article4 : 0,
			article5 : 0,
			article6 : 0,
			article7 : 0
	}
	$scope.article_opi = {
			article_opinion1 : "",
			article_opinion2 : "",
			article_opinion3 : "",
			article_opinion4 : "",
			article_opinion5 : "",
			article_opinion6 : "",
			article_opinion7 : ""
	}
	
	$scope.sendResult = function() {
		var result = $scope.article;
		// 의견 추가
		result["article_opinion1"] = $scope.article_opi.article_opinion1;
		result["article_opinion2"] = $scope.article_opi.article_opinion2;
		result["article_opinion3"] = $scope.article_opi.article_opinion3;
		result["article_opinion4"] = $scope.article_opi.article_opinion4;
		result["article_opinion5"] = $scope.article_opi.article_opinion5;
		result["article_opinion6"] = $scope.article_opi.article_opinion6;
		result["article_opinion7"] = $scope.article_opi.article_opinion7;
		// 평가한 교수님 고유번호 추가
		result["uni_num"] = $scope.info.uni_num;
		// 평가한 팀 아이디 추가
		result["team_id"] = 2;
		console.log(result);
		
		var selected = confirm("정말 이대로 평가를 종료 하시겠습니까?")
		if(selected) {
			$http({method: 'POST', url:"/testing/sendEval", params: result})
			.success(function (data, status, headers, config) {
				console.log(data);
				alert("평가 내용이 정상적으로 완료되었습니다.");
			})
			.error(function (data, status, header, config) {
				console.log(data);
				alert("평가 저장에 실패하였습니다.");
			});
		}
		
	}
	
	
	$scope.evalSum = 0;
	$scope.getTotal = function() {
		var resultScore = 0;
		angular.forEach($scope.article, function(value, key) {
			resultScore += parseInt(value);
		})
		$scope.evalSum = resultScore;
		return $scope.evalSum;
	}
}])