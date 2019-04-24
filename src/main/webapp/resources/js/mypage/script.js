var mypage = angular.module('student', []);

mypage.controller('StdCtrl', function($scope, $http) {
	
	$scope.stdList = {};
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
	
	$scope.te = function(){
		$http({method: 'POST', url:"/mypage/renameTeam", params: $scope.info})
		.success(function (data, status, headers, config) {
			console.log($scope.info);
			console.log(data);
		})
		.error(function (data, status, header, config) {
			console.log(data);
		});
	}
	
	$scope.getStdList = function() {
		$http({method: 'GET', url:"/mypage/studentSelectAll"})
		.success(function (data, status, headers, config) {
			$scope.stdList = data;
			console.log(data);
		})
		.error(function (data, status, header, config) {
			console.log(data);
		});
	}
	$scope.getStdList();
	
	$scope.nameValue = {name : ""};
	$scope.getStdSearch = function() {
		$http({method: 'GET', url:"/mypage/studentSearch", params: $scope.nameValue})
		.success(function (data, status, headers, config) {
			$scope.stdList = data;
			console.log($scope.nameValue);	
		})
		.error(function (data, status, header, config) {
			console.log(data);
		});
	}
	
	
	$scope.stdScore = function() {
		$http({method: 'GET', url:"/mypage/stdScore", params: $scope.info})
		.success(function (data, status, headers, config) {
			$scope.userScore = data;
			console.log($scope.userScore);	
		})
		.error(function (data, status, header, config) {
			console.log(data);
		});
	}
	$scope.stdScore();
	
	$scope.myPostSelect = function() {
		$http({method: 'GET', url:"/mypage/myPostSelect", params: $scope.info})
		.success(function (data, status, headers, config) {
			$scope.myPostList = data;
			console.log($scope.myPostList);
		})
	}
	$scope.myPostSelect();
	
//	$scope.selectedStd = {};
	$scope.chooseTeamStudent = function(list) {
		list.team_id = $scope.info.team_id;
		$http({method: 'GET', url:"/mypage/chooseTeamStudent", params: list})
		.success(function (data, status, headers, config) {
			console.log(list);
		})
	}
	
	$scope.deleteTeamStudent = function(members) {
		$http({method: "GET", url:"/mypage/deleteTeamStudent", params: members})
		.success(function (data, status, headers, config) {
			console.log(members);
			console.log(data);
		})
	}
	
	// 팀장만 팀 관리 탭이 보이도록 만들기
	$scope.distTeamLeader = function(author) {
		console.log(author);
		console.log($scope.teamLeaderYn);
		if (author == 1)
			return true;
		else
			return false;
	}
	
	$scope.teamStudent = function() {
		$http({method: 'GET', url:"/mypage/teamStudent", params: $scope.info})
		.success(function (data, status, headers, config) {
			$scope.teamMembers = data;
			console.log($scope.teamMembers);	
		})
		.error(function (data, status, header, config) {
			console.log(data);
		});
	}
	$scope.teamStudent();
	
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
	
	$scope.myPostSelect = function(mypost){
		console.log(mypost.post_num);
		location.href = "/board/detail?post_num=" + mypost.post_num;
	}

});
