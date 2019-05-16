var evalApp = angular.module('evalSetting',[]);

evalApp.controller('EvalSetCtrl', function($scope,$http) {
	
	
	$scope.selectedProf = {};
	
	$scope.exit = function(){
		location.href =  "/mypage";
    }
	$scope.setEvalSetting = function(){
		var param = {startYn : "Y"};
		$http({method: 'POST', url:"/testing/setEvalSetting", params: param})
		.success(function (data, status, headers, config) {
			console.log(data);
			if(data.state == 1)
				alert("평가를 활성화 하였습니다.");
			else
				alert("평가를 실행하지 못했습니다.");
			
			location.href = "/mypage";
		})
		.error(function (data, status, header, config) {
			console.log(data);
		});
		
		return $scope.setEvalProf();
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
			console.log($scope.profList);
		})
		.error(function (data, status, header, config) {
			console.log(data);
		});
	}
	$scope.selectProfAll();
	


	$scope.setEvalProf = function() {
		console.log($scope.selectedProf);
		var tried = 0;
		var check = 0;
		angular.forEach($scope.selectedProf, function(value, key) {
			if(value == true) {
				var param = {uni_num : key};
				$http({method: 'POST', url:"/testing/setEvalProf", params: param})
				.success(function (data, status, headers, config) {
					console.log(data.state);
					check += data.state;
				})
				.error(function (data, status, header, config) {
					console.log(data);
					return alert("교수님 등록 실패, 이미 등록된 교수가 있거나, 오류가 있습니다.");
				});
				tried++;
			}
		});

		
//		console.log(param);
	}
	
});
