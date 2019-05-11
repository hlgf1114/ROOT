var manageApp = angular.module('manage',[]);

manageApp.controller('ManageCtrl', function($scope,$http) {
	
	
	$scope.exit = function(){
		location.href =  "/login";
    }
	
	$scope.user = [//아이디를 받아와 출력
		{ name : "김점구"},
		{ name : "김정길"},
		{ name : "송은지"},
		{ name : "몰라" },
		{ name : "암거나"},
		{ name : "사람" }
	];
	$scope.manager = ["0 : 일반인", "1 : 팀장" ,"2 : 교수", "3 : 학과장", "4 : 관리자"];
	
	

	
	
	
});
