var manageApp = angular.module('manage',[]);

manageApp.controller('ManageCtrl', function($scope,$http) {
	
	
	$scope.exit = function() {
		location.href = "/login";
	}
	
	$scope.setAuth = function(row, selectedUser){
		var param = {
				authorization : row.authorization,
				uni_num : selectedUser.uni_num
		}
		console.log(param);
		
		$http({method: 'POST', url:"/setAuth", params: param})
		.success(function (data, status, headers, config) {
			console.log(data);
			if(data.state == 1)
				alert("권한이 수정되었습니다.");
			else
				alert("문제가 발생하였습니다.");
			location.href ="/manager";
		})
		.error(function (data, status, header, config) {
			console.log(data);
		});
    }
	
	$scope.user = {};
	$scope.getUserAll = function() {
		$http({method: 'POST', url:"/getUserAll"})
		.success(function (data, status, headers, config) {
			console.log(data);
			$scope.user = data;
		})
		.error(function (data, status, header, config) {
			console.log(data);
		});
	}
	$scope.getUserAll();
	
	$scope.manager = [
		{authorization : 0, authName : "학생(기본) (권한:0)"},
		{authorization : 1, authName : "팀장 (권한:1)"},
		{authorization : 2, authName : "교수 (권한:2)"},
		{authorization : 3, authName : "학과장 (권한:3)"}
	]
	
	

	
	
	
});
