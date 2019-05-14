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
	
	$scope.checkTeamName = function() {
		//count가 0이면 없는 것이고, 1이면 있다는 것이다.
		// 이름이 있는지 체크한다.
		$http({method: 'POST', url:"/mypage/checkTeamName", params: $scope.info})
		.success(function (data, status, headers, config) {
			console.log(data);
			if(data.count == 0)
				// 팀을 만든다.
				return renameTeam();
			else
				alert("이미 있는 이름입니다. 다른 이름을 시도해 주세요.");
		})
		.error(function (data, status, header, config) {
			console.log(data);
		});

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
	
	$scope.stdList = {};
	
	
	$scope.getData = function(){
		$http({method: 'GET', url:"/mypage/studentSelect"})
		.success(function (data, status, headers, config) {
			console.log(data);
			$scope.info = data;
			$scope.getStdList(); // 팀이 정해지지 않은 학생 불러오기
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
	
	// 팀이 정해지지 않은 사람 불러오기
	$scope.getStdList = function() {
		var param = {team_id : 0};
		console.log(param);
		$http({method: 'POST', url:"/mypage/notInTeamStdSelect", params: param})
		.success(function (data, status, headers, config) {
			console.log(data);
			$scope.stdList = data;
		})
		.error(function (data, status, header, config) {
			console.log(data);
		});
	}
	
	/********************************팀 생성********************************/
	
	// 팀을 만든다.
	$scope.makeTeam = function(param) {
		console.log(param);
		$http({method: 'POST', url:"/mypage/makeTeam", params: param})
		.success(function (data, status, headers, config) {
			console.log(data);
			if(data.state == 1) {
				return $scope.getTeamId(param);
			}
			else {
				alert("팀 생성에 실패했거나, 다른 문제가 있습니다.");
			}
		})
		.error(function (data, status, header, config) {
			console.log(data);
		});
	}
	
	// 팀 이름이 중복되는지 알아온다.
	$scope.checkTeamName = function(makeTeamName, notInTeamStd) {
		//count가 0이면 없는 것이고, 1이면 있다는 것이다.
		var selected = confirm("정말로 팀을 생성하시겠습니까?");
		if(selected) {
			var param = {team_name: makeTeamName,
						charge_prof: $scope.info.uni_num,
						uni_num: notInTeamStd.uni_num};
			console.log(param);
			// 이름이 있는지 체크한다.
			$http({method: 'POST', url:"/mypage/checkTeamName", params: param})
			.success(function (data, status, headers, config) {
				console.log(data);
				if(data.count == 0)
					// 팀을 만든다.
					return $scope.makeTeam(param);
				else
					alert("이미 있는 이름입니다. 다른 이름을 시도해 주세요.");
			})
			.error(function (data, status, header, config) {
				console.log(data);
			});
		}
	}
	
	// 방금 생성한 team_id를 가져온다.
	$scope.getTeamId = function(param) {
		$http({method: 'POST', url:"/mypage/getTeamId", params: param})
		.success(function (data, status, headers, config) {
			console.log(data);
			return $scope.setStdLeader(data, param);
		})
		.error(function (data, status, header, config) {
			console.log(data);
		});
		
	}
	
	// 팀장을 정한다.
	$scope.setStdLeader = function(team_id, param) {
		param.team_id = team_id.team_id;
		console.log(param);
		$http({method: 'POST', url:"/mypage/setStdLeader", params: param})
		.success(function (data, status, headers, config) {
			console.log(data);
			alert("팀 생성이 완료되었습니다.");
			location.href="/mypage";
		})
		.error(function (data, status, header, config) {
			console.log(data);
		});
	}
	
	/************************************************************************/
	
	/********************************팀 삭제********************************/
	$scope.deleteTeam = function(team) {
		console.log(team);
		var selected = confirm("정말로 팀을 삭제하시겠습니까?");
		if(selected) {
			$http({method: 'POST', url:"/mypage/deleteTeam", params: team})
			.success(function (data, status, headers, config) {
				console.log(data);
				if(data.state == 1) {
					alert("팀 삭제가 완료되었습니다.");
					return $scope.resetTeamStd(team);
				}
			})
			.error(function (data, status, header, config) {
				console.log(data);
			});
		}
	}
	
	$scope.resetTeamStd = function(team) {
		$http({method: 'POST', url:"/mypage/resetTeamStd", params: team})
		.success(function (data, status, headers, config) {
			console.log(data);
			if(data.state == team.teamStd.length) {
				alert("팀원 초기화 되었습니다.");
				location.href="/mypage";
			}
		})
		.error(function (data, status, header, config) {
			console.log(data);
		});
		
	}
	
	
	/************************************************************************/
	
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
