var adminlogin = angular.module('adminlogin', []);


adminlogin.controller('adminloginCtrl', function($scope, $http) {

	$scope.adminLogin = function(ID, password){
		var param = {
				id : ID,
				sso : password
		};
		
		$http({method: 'GET', url:"/adminlogincheck", params: param})
		.success(function (data, status, headers, config) {
			console.log(data);
			
			if(data.state == 0)
				alert("아이디 혹은 비밀번호가 틀렸습니다.");
			else
				location.href = "/admin";
		})
		.error(function (data, status, header, config) {
			console.log(data);
		});
		
	}
	
	
		
});