var as = angular.module('as',[]);

as.controller('actrl', function($scope,$http) {
	
	
	$scope.exit = function(){
		location.href =  "mypage/professor";
    }
	$scope.stert = function(){
		location.href =  "evaluate";
    }
	
	$scope.team = [
		{name : "1팀"},
		{name : "2팀"},
		{name : "3팀"},
		{name : "4팀"},
		{name : "5팀"},
		{name : "6팀"}
	];
	$scope.pro = [
		{name : "김점구"},
		{name : "김정길"},
		{name : "송은지"},
		{name : "몰라"},
		{name : "암거나"},
		{name : "사람"}
	];
	
	
//	$scope.prolist = function(){
//		$http({method: 'POST', url:"/testing/proselect"})
//		.success(function (data, status, header, config) { 
//			console.log(data);
//			$scope.prolist = data;
//		})
//		.error(function (data, status, header, config) {
//			console.log(data);
//		});
//	}
//	$scope.prolist();
	
	
	
	
});
