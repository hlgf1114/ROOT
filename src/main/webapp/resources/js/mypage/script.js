var mypage = angular.module('student', []);

mypage.controller('StdCtrl', function($scope, $http) {

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
	
	$scope.te = function(){
		$http({method: 'POST', url:"/mypage/renameTeam", params: $scope.info})
		.success(function (data, status, headers, config) {
			console.log(data);
		})
		.error(function (data, status, header, config) {
			console.log(data);
		});
	}
	
//	$scope.info = {
//		name : '김승빈',
//		stdNum : '16100776',
//		dept : 'Computer-Software',
//		address : "오산시 수청동 등등등",
//		team : "캡틴 아메리카"
//	};

	$scope.mainView = 'http://www.naver.com';

	$scope.loginDate = Date.now();

	$scope.relocated_mainView = function() {

		window.location.href = "/main";
	}

});
