var mainPage = angular.module('Main', []);


mainPage.controller('MainCtrl', function($scope, $http) {
	

	$scope.postTypes = [
		{"postType": 2, "name": "회의록"},
		{"postType": 3, "name": "제안서"},
		{"postType": 4, "name": "요구분석서"},
		{"postType": 5, "name": "설계서"},
		{"postType": 6, "name": "구현서"},
		{"postType": 7, "name": "형성관리서"},
		{"postType": 8, "name": "메뉴얼"},
		{"postType": 9, "name": "최종보고서"}
	];
	
	$scope.info = {};
	$scope.getData = function(){ // 세션정보 받아오기
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
	
	
	$scope.params = {
			index : 0
	};
	
	$scope.getMainSelect = function() {
			$http({method: 'POST', url:"/main/postSelect", params: $scope.params})
			.success(function (data, status, headers, config) {
				console.log(data);
				$scope.MainList = data.resultList;
				$scope.TeamList = data.teamList;
				$scope.pagingList = [];
				var pageSize = Math.ceil(data.totMap.tot / 5);
				for(var i = 0; i < pageSize; i++){
					$scope.pagingList[i] = (i + 1);
				}
			})
			.error(function (data, status, header, config) {
				console.log(data);
			});
	}
	$scope.getMainSelect();
	
	
	$scope.teamEvent = function(team, postType){
		$scope.params = {index : 0};
		if(team != null){
			$scope.params.team_id = team.team_id;
		}
		if(postType != null) {
			$scope.params.postType = postType.postType;
			console.log($scope.params);
		}
		$scope.getMainSelect();
	}
	
	
	$scope.pagingEvent = function(page){
		var index = (page - 1) * 5;
		$scope.params.index = index;
		$scope.getMainSelect();
	}
	
	$scope.noticeList = {};
	$scope.getNoticeList = function() {
		$http({method: 'POST', url:"/main/getNoticeList"})
		.success(function (data, status, headers, config) {
			console.log(data);
			$scope.noticeList = data;	
		})
		.error(function (data, status, header, config) {
			console.log(data);
			$scope.info= {};
		});
	}
	$scope.getNoticeList();
	
	$scope.disableEval = function() {
		// 평가가 시작되었는지 확인
		if($scope.startYn.startYn == "Y")
			if($scope.info.authorization == 2 || $scope.info.authorization == 3) {
				return false;
			}
			else {
				return true;
			}
		else
			return true;
	}
	
	$scope.startYn = {};
	$scope.evalStartSelect = function() {
		$http({method: 'POST', url:"/main/evalStartSelect"})
		.success(function (data, status, headers, config) {
			console.log(data);
			$scope.startYn = data;
		})
		.error(function (data, status, header, config) {
			console.log(data);
			$scope.info= {};
		});
	}
	$scope.evalStartSelect();
	
	// 권한에 따라  팀 버튼 비활성화
	$scope.disableButton = function() {
		// 권한 2는 교수님 권한
		if($scope.info.authorization == 2 || $scope.info.authorization == 3) {
			return false;
		}
		else {
			return true;
		}
	}
	
	$scope.goEval = function() {
		
	}
	
	$scope.postEvent = function(row){
		location.href = "/board/detail?post_num=" + row.post_num;
	}
	    
	$scope.a = function(){
    	location.href = "/board/detail";
    }
	
	$scope.relocated_board = function(){
    	location.href = "/board/write";
    }
	
	$scope.relocated_mypage = function() {
		location.href = "/mypage";
	}
	
	$scope.logout = function(){
    	location.href = "/Logout";
    }
		
});