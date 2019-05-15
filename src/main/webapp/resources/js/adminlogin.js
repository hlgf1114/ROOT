var adminlogin = angular.module('adminlogin', []);


adminlogin.controller('adminloginCtrl', function($scope, $http) {

	$scope.login = function(ID, password){
		var param = {
				uni_num : ID,
				sso : password
		}
		
		var id = 1;
		var pw = "0000"
		if(id == ID){
			if(pw == password){
				location.href = "/admin";
			}else{
				alert("비밀 번호 틀림");
			}
		}else{
			alert("아이디 틀림");
		}
	}
//	$scope.kakaologin = function(){
//		location.href = "/admin";
//	}
	
		
});