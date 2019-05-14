var mypage = angular.module('student', []);

/**************************
 * student.jsp controller *
 * ************************/
mypage.controller('StdCtrl', function($scope, $http) {
	
	$scope.stdList = {};
	$scope.info = {};
	$scope.postCount = {};
	
	$scope.params = {
			index : 0
	};

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
	
	$scope.renameTeam = function(){
		var selected = confirm("정말로 팀명을 변경하시겠습니까?")
		if(selected) {
			$http({method: 'POST', url:"/mypage/renameTeam", params: $scope.info})
			.success(function (data, status, headers, config) {
				console.log($scope.info);
				console.log(data);
				location.href = "/mypage"
			})
			.error(function (data, status, header, config) {
				console.log(data);
			});
		}
	}
	
	$scope.getStdList = function() {
		var param = {team_id : $scope.info.team_id};
		$http({method: 'GET', url:"/mypage/studentSelectAll", params: param})
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
	
	$scope.userScore = {};
	$scope.passYn = null;
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
	
	$scope.checkPassNo = function() {
		if($scope.userScore.eval_end == 1)
			return "합격";
		else if($scope.userScore.eval_end == 2)
			return "재심사";
		else
			return "불합격";
		
	}
	
	
	$scope.postTotCount = function() {
		$http({method: 'GET', url:"/mypage/postTotCount"})
		.success(function (data, status, headers, config) {
			$scope.postCount = data;
			console.log($scope.postCount);	
		})
		.error(function (data, status, header, config) {
			console.log(data);
		});
	}
	$scope.postTotCount();
	
	$scope.myPostSelectAll = function() {
		$http({method: 'GET', url:"/mypage/myPostSelectAll", params: $scope.info, params: $scope.params})
		.success(function (data, status, headers, config) {
			$scope.myPostList = data;
			$scope.pagingList = [];
			console.log($scope.postCount);
			var pageSize = Math.ceil($scope.postCount.tot / 5);
			for(var i = 0; i < pageSize; i++){
				$scope.pagingList[i] = (i + 1);
			}
			console.log($scope.myPostList);
		})
	}
	$scope.myPostSelectAll();
	
	$scope.pagingEvent = function(page){
		var index = (page - 1) * 5;
		$scope.params.index = index;
		console.log($scope.params);
		$scope.myPostSelectAll();
	}
	
//	$scope.selectedStd = {};
	$scope.chooseTeamStudent = function(list) {
		list.team_id = $scope.info.team_id;
		var selected = confirm(list.name + "님을 팀원으로 허락하겠습니까?")
		if(selected) {
			$http({method: 'GET', url:"/mypage/chooseTeamStudent", params: list})
			.success(function (data, status, headers, config) {
				console.log(list);
				location.href ="/mypage";
			})
		}
	}
	
	$scope.deleteTeamStudent = function(members) {
		var selected = confirm(members.name + "님을 정말로 팀에서 퇴출 시키시겠습니까?")
		if(selected) {
			$http({method: "GET", url:"/mypage/deleteTeamStudent", params: members})
			.success(function (data, status, headers, config) {
				console.log(members);
				console.log(data);
				location.href = "/mypage"
			})
		}
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
	
	// 권한에 따라  팀 관리탭 비활성화
	$scope.disableTab = function() {
		// team_id = 0 이면 팀이 없음
		if($scope.info.team_id == 0) {
			return true;
		}
		else {
			if($scope.info.authorization == 1) {
				return false;
			}
			else {
				return true;
			}
		}
	}
	
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


/****************************
 * professor.jsp controller *
 * **************************/
mypage.controller('ProfCtrl', function($scope, $http, $timeout) {
	
	// 개인정보를 세션에서 가져온다
	$scope.info = {};
	$scope.postCount = {};
	
	$scope.params = {
			index : 0
	};
	
	$scope.selectedTeamStd = {};
	
	
	$scope.getData = function(){
		$http({method: 'GET', url:"/mypage/studentSelect"})
		.success(function (data, status, headers, config) {
			console.log(data);
			$scope.info = data;
			return $scope.getTeamData();
		})
		.error(function (data, status, header, config) {
			console.log(data);
			$scope.info= {};
		});
	}
	$scope.getData();
	
	//팀장을 변경한다.
	$scope.updateTeamLeader = function(row, team) {
		console.log(row);
		console.log(team);
		// 팀원들의 권한 초기화 == 0으로
		var state = 0;
		$http({method: 'POST', url: "/mypage/resetTeamLeader", params: team})
		.success(function (data, status, headers, config) {
			console.log(data);
		})
		.error(function (data, status, header, config) {
			console.log(data);
		});
		
		// 선택한 팀장의 권한을 부여
			$http({method: 'POST', url: "/mypage/updateTeamLeader", params: row})
			.success(function (data, status, headers, config) {
				console.log(data);
				// 초기화가 잘 되었는지 확인
				state = data.state;
			})
			.error(function (data, status, header, config) {
				console.log(data);
			});
			
			if(state != 1)
				alert("팀장이 업데이트 되었습니다.");
	}
	
	
	// 리스트로 나오는 팀의 정보를 받아 파라미터 값으로 넘겨 그 팀의 팀원 정보를 받아온다
//	$scope.teamLeaderList = {}; // 팀 리더만 따로 뺀다
	$scope.teamStd = []; // 팀원들 리스트
	var getTeamStd = function(row, count) {
		var teamStd;
		$http({method: 'POST', url: "/mypage/getTeamStd", params: row})
		.success(function (data, status, headers, config) {
			console.log(data);
			teamStd = data;
//			console.log($scope.teamStd);
			
			$scope.teamList[count].teamStd = teamStd;
			
			// 팀 리더의 정보도 넣는다.
				for(j = 0; j < $scope.teamList[count].teamStd.length; j++)
					if($scope.teamList[count].teamStd[j].authorization == 1) {
					$scope.teamList[count].teamLeader = $scope.teamList[count].teamStd[j];
					}

		})
		.error(function (data, status, header, config) {
			console.log(data);
		});
	}
	
	// 교수님이 맡은 팀 정보를 가져온다.
	$scope.teamList = {};
	$scope.getTeamData = function() {
		$http({method: 'POST', url: "/mypage/profTeamSelect", params: $scope.info})
		.success(function (data, status, headers, config) {
			console.log(data);
			$scope.teamList = data;
			var count = 0;
			angular.forEach($scope.teamList, function(value, key) {
				console.log(value);
				getTeamStd(value, count);
				count++;
			});
			console.log($scope.teamList);
		})
		.error(function (data, status, header, config) {
			console.log(data);
		});
		
		
	}
	
	// 게시글 개수 가져오기
	$scope.postTotCount = function() {
		$http({method: 'GET', url:"/mypage/postTotCount"})
		.success(function (data, status, headers, config) {
			$scope.postCount = data;
			console.log($scope.postCount);	
		})
		.error(function (data, status, header, config) {
			console.log(data);
		});
	}
	$scope.postTotCount();
	
	// 내가 쓴 게시글 목록 가져오기
	$scope.myPostSelectAll = function() {
		$http({method: 'GET', url:"/mypage/myPostSelectAll", params: $scope.info, params: $scope.params})
		.success(function (data, status, headers, config) {
			$scope.myPostList = data;
			$scope.pagingList = [];
			var pageSize = Math.ceil($scope.postCount.tot / 5);
			for(var i = 0; i < pageSize; i++){
				$scope.pagingList[i] = (i + 1);
			}
			console.log($scope.myPostList);
		})
	}
	$scope.myPostSelectAll();
	
	// 페이지 이벤트
	$scope.pagingEvent = function(page){
		var index = (page - 1) * 5;
		$scope.params.index = index;
		console.log($scope.params);
		$scope.myPostSelectAll();
	}
	
	// 내가 쓴 글 중 하나 선택하면 넘어가게
	$scope.myPostSelect = function(mypost){
		console.log(mypost.post_num);
		location.href = "/board/detail?post_num=" + mypost.post_num;
	}
	
	// 평가를 중단
	$scope.stopEval = function() {
		var selected = confirm("정말로 평가를 중단 하시겠습니까?");
		if(selected) {
			$http({method: 'POST', url:"/mypage/stopEval"})
			.success(function (data, status, headers, config) {
				console.log(data);	
			})
			.error(function (data, status, header, config) {
				console.log(data);
			});
			location.href = "/mypage";
		}
	}
	
	// 평가 심사 출력
	$scope.checkPassNo = function(row) {
		if(row.eval_end == 1)
			return "합격";
		else if(row.eval_end == 2)
			return "재심사";
		else
			return "불합격";	
	}

	// 평가 계획서 학과장만 보이게
	$scope.disableButton = function() {
		// 권한 3는 학과장 권한
		if($scope.info.authorization == 3) {
			return false;
		}
		else {
			return true;
		}
	}
	
	// 평가가 시작되었는지 중단되었는지 확인
	$scope.startYn = {};
	$scope.evalStartSelect = function() {
		$http({method: 'POST', url:"/main/evalStartSelect"})
		.success(function (data, status, headers, config) {
			console.log(data);
			$scope.startYn = data;
		})
		.error(function (data, status, header, config) {
			console.log(data);
		});
	}
	$scope.evalStartSelect();
	
	// 평가 중단하기 학과장만 보이게 또는 중단시 버튼 사라지게
	$scope.disableEvalButton = function() {
		if($scope.info.authorization == 3)
			if($scope.startYn.startYn == "Y")
				return false;
			else
				return true;
		else
			return true;
	}
	
	$scope.relocate_mainView = function() {
		location.href = "/main";
	}
	
	$scope.relocate_evalSetView = function() {
		location.href = "/testing/evalsetting"
	}
	
	
});
