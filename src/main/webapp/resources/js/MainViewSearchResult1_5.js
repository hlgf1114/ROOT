var mainPage = angular.module('MainResult', ['angularUtils.directives.dirPagination']);

mainPage.controller('SearchData', function($scope) {
    
    $scope.data =[
    {
    	team: "1",
        user: '까치',
        title: 'page1 1조 회의록',
        download: 'download',
        uploadDate: Date.now(),
        docType:"회의록",
        page:"1"
        
    },
    {
    	team:"2",
        user: '두루미',
        title: 'page1 2조 발표자료',
        download: 'download',
        uploadDate: Date.now(),
        docType:"발표자료",
        page:"1"
    },
    {
    	team:"3",
        user: '참새',
        title: 'page1 3조 중간평가',
        download: 'download',
        uploadDate: Date.now(),
        docType:"중간평가",
        page:"1"
    },
    {
    	team:"2",
        user: '오소리',
        title: 'page1 2조 기말평가',
        download: 'download',
        uploadDate: Date.now(),
        docType:"기말평가",
        page:"1"
    },
    {
    	team:"1",
        user: '백조',
        title: 'page1 1조 총평가',
        download: 'download',
        uploadDate: Date.now(),
        docType:"총평가",
        page:"1"
    },
    {
    	team:"3",
        user: '황새',
        title: 'page1 3조 제안평가',
        download: 'download',
        uploadDate: Date.now(),
        docType:"제안평가",
        page:"1"
    },
    
    
    
    {
    	team: "1",
        user: '까치',
        title: 'page2 1조 회의록',
        download: 'download',
        uploadDate: Date.now(),
        docType:"회의록",
        page:"2"
        
    },
    {
    	team:"2",
        user: '두루미',
        title: 'page2 2조 발표자료',
        download: 'download',
        uploadDate: Date.now(),
        docType:"발표자료",
        page:"2"
    },
    {
    	team:"3",
        user: '참새',
        title: 'page2 3조 중간평가',
        download: 'download',
        uploadDate: Date.now(),
        docType:"중간평가",
        page:"2"
    },
    {
    	team:"2",
        user: '오소리',
        title: 'page2 2조 기말평가',
        download: 'download',
        uploadDate: Date.now(),
        docType:"기말평가",
        page:"2"
    },
    {
    	team:"1",
        user: '백조',
        title: 'page2 1조 총평가',
        download: 'download',
        uploadDate: Date.now(),
        docType:"총평가",
        page:"2"
    },
    {
    	team:"3",
        user: '황새',
        title: 'page2 3조 제안평가',
        download: 'download',
        uploadDate: Date.now(),
        docType:"제안평가",
        page:"2"
    },
    ];
    
    $scope.order={
    		nameOrder:"0"	    
    }
    
    $scope.setDocFilter = function(input) {
        $scope.uploaderFilter = '';
        $scope.docFilter = input;
        console.log($scope.docFilter);
    };
    
    $scope.setUploader = function(input) {
        $scope.uploaderFilter = '';
        $scope.uploaderFilter = input;
        console.log($scope.uploaderFilter);
    };
    
    $scope.setTeamFilter = function(input) {
        $scope.uploaderFilter = '';
        $scope.teamFilter = input;
        console.log($scope.uploaderFilter);
    };
    
    $scope.setAllFilter = function(input1, input2, input3) {
        $scope.uploaderFilter = '';
        $scope.docFilter = input1;
        $scope.teamFilter = input2;
        $scope.pageFilter = input3;
        console.log($scope.uploaderFilter);
    };
    
    $scope.setPageFilter = function(input) {
    	$scope.pageFilter = "1";
        $scope.pageFilter = input;
        console.log($scope.uploaderFilter);
    };
    
    $scope.propertyName='age';
    $scope.reverse=true;
    
    
    $scope.setNameSort = function(propertyName) {
    	$scope.uploaderFilter = '';
        /*$scope.order.nameOrder=input;*/
    	$scope.reverse=($scope.propertyName==propertyName) ? !$scope.reverse: false;
    	$scope.propertyName=propertyName;
        console.log($scope.uploaderFilter);
    };
    
    $scope.relocated_mypage = function() {

		window.location = "ProfessorMypage1_2.html";
	}
    
    /*$scope.filteredTodos = []
    ,$scope.currentPage = 1
    ,$scope.numPerPage = 10
    ,$scope.maxSize = 5;* 페이지네이션 저장공간/

    /*$scope.makeTodos = function() {
      $scope.todos = [];
      for (i=1;i<=1000;i++) {
        $scope.todos.push({ text:"todo "+i, done:false});
      }
    };
    $scope.makeTodos();*/ 

    /*$scope.$watch("currentPage + numPerPage", function() {
      var begin = (($scope.currentPage - 1) * $scope.numPerPage)
      , end = begin + $scope.numPerPage;

      $scope.filteredTodos = $scope.todos.slice(begin, end);
    }); 페이지네이션모듈*/
  
    
    $scope.logout = function(){
    	location.href = "/Logout";
    }
    
    $scope.relocated_board = function(){
    	location.href = "/board/write";
    }
});

