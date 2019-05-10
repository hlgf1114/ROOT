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
	
	// 권한에 따라  팀 버튼 비활성화
	$scope.disableButton = function() {
		// 권한 2는 교수님 권한
		if($scope.info.authorization == 2) {
			return false;
		}
		else {
			return true;
		}
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



//mainPage.controller('SearchData', function($scope) {
//    
//    $scope.data =[
//    {
//    	team: "1",
//        user: '까치',
//        title: 'page1 1조 회의록',
//        download: 'download',
//        uploadDate: Date.now(),
//        docType:"회의록",
//        page:"1"
//        
//    },
//    {
//    	team:"2",
//        user: '두루미',
//        title: 'page1 2조 발표자료',
//        download: 'download',
//        uploadDate: Date.now(),
//        docType:"발표자료",
//        page:"1"
//    },
//    {
//    	team:"3",
//        user: '참새',
//        title: 'page1 3조 중간평가',
//        download: 'download',
//        uploadDate: Date.now(),
//        docType:"중간평가",
//        page:"1"
//    },
//    {
//    	team:"2",
//        user: '오소리',
//        title: 'page1 2조 기말평가',
//        download: 'download',
//        uploadDate: Date.now(),
//        docType:"기말평가",
//        page:"1"
//    },
//    {
//    	team: "3",
//        user: '황새',
//        title: 'page2 1조 회의록',
//        download: 'download',
//        uploadDate: Date.now(),
//        docType:"회의록",
//        page:"2"
//        
//    },
//    
//    
//    
//    {
//    	team: "1",
//        user: '까치',
//        title: 'page2 1조 회의록',
//        download: 'download',
//        uploadDate: Date.now(),
//        docType:"회의록",
//        page:"2"
//        
//    },
//    {
//    	team:"2",
//        user: '두루미',
//        title: 'page2 2조 발표자료',
//        download: 'download',
//        uploadDate: Date.now(),
//        docType:"발표자료",
//        page:"2"
//    },
//    {
//    	team:"3",
//        user: '참새',
//        title: 'page2 3조 중간평가',
//        download: 'download',
//        uploadDate: Date.now(),
//        docType:"중간평가",
//        page:"2"
//    },
//    {
//    	team:"2",
//        user: '오소리',
//        title: 'page2 2조 기말평가',
//        download: 'download',
//        uploadDate: Date.now(),
//        docType:"기말평가",
//        page:"2"
//    },
//    {
//    	team:"3",
//        user: '황새',
//        title: 'page2 3조 제안평가',
//        download: 'download',
//        uploadDate: Date.now(),
//        docType:"제안평가",
//        page:"2"
//    },
//    ];
//    
//    $scope.order={
//    		nameOrder:"0"	    
//    }
//    
//    $scope.setDocFilter = function(input) {
//        $scope.uploaderFilter = '';
//        $scope.docFilter = input;
//        console.log($scope.docFilter);
//    };
//    
//    $scope.setUploader = function(input) {
//        $scope.uploaderFilter = '';
//        $scope.uploaderFilter = input;
//        console.log($scope.uploaderFilter);
//    };
//    
//    $scope.setTeamFilter = function(input) {
//        $scope.uploaderFilter = '';
//        $scope.teamFilter = input;
//        console.log($scope.uploaderFilter);
//    };
//    
//    $scope.setAllFilter = function(input1, input2, input3) {
//        $scope.uploaderFilter = '';
//        $scope.docFilter = input1;
//        $scope.teamFilter = input2;
//        $scope.pageFilter = input3;
//        console.log($scope.uploaderFilter);
//    };
//    
//    $scope.setPageFilter = function(input) {
//    	$scope.pageFilter = "1";
//        $scope.pageFilter = input;
//        console.log($scope.uploaderFilter);
//    };
//    
//    $scope.propertyName='age';
//    $scope.reverse=true;
//    
//    
//    $scope.setNameSort = function(propertyName) {
//    	$scope.uploaderFilter = '';
//        /*$scope.order.nameOrder=input;*/
//    	$scope.reverse=($scope.propertyName==propertyName) ? !$scope.reverse: false;
//    	$scope.propertyName=propertyName;
//        console.log($scope.uploaderFilter);
//    };
//    	
//	
//    /*$scope.filteredTodos = []
//    ,$scope.currentPage = 1
//    ,$scope.numPerPage = 10
//    ,$scope.maxSize = 5;* 페이지네이션 저장공간/
//
//    /*$scope.makeTodos = function() {
//      $scope.todos = [];
//      for (i=1;i<=1000;i++) {
//        $scope.todos.push({ text:"todo "+i, done:false});
//      }
//    };
//    $scope.makeTodos();*/ 
//
//    /*$scope.$watch("currentPage + numPerPage", function() {
//      var begin = (($scope.currentPage - 1) * $scope.numPerPage)
//      , end = begin + $scope.numPerPage;
//
//      $scope.filteredTodos = $scope.todos.slice(begin, end);
//    }); 페이지네이션모듈*/
//  
//    
//    
//    
//    $scope.relocated_board = function(){
//    	location.href = "/board/write";
//    }
//});

