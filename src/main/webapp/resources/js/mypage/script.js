var mypage = angular.module('student', []);

mypage.controller('StdCtrl', function($scope) {

	$scope.info = {
		name : '김승빈',
		stdNum : '16100776',
		dept : 'Computer-Software',
		address : "오산시 수청동 등등등",
		team : "캡틴 아메리카"
	};

	$scope.mainView = 'http://www.naver.com';

	$scope.loginDate = Date.now();

	$scope.relocated_mainView = function() {

		window.location = "https://www.naver.com";
	}

});
