var evaluateRead = angular.module('evaluateRead',[]);

evaluateRead.controller('evaluateReadCtrl', function($scope,$http) {
	
	$scope.exit = function(){
		location.href =  "/main";
    }
	
	$scope.evalInfo = {};
	$scope.getEvalInfo = function() {
		var href = location.href;
		var params = href.substring(href.indexOf("?") + 1, href.length);
		var value = params.split("=")[1];
		$scope.params = {
				eval_team_no : value
		};
		console.log($scope.params);
		$http({method: 'POST', url:"/testing/getEvalInfo", params: $scope.params})
		.success(function (data, status, headers, config) {
			console.log(data);
			$scope.evalInfo = data;
		})
		.error(function (data, status, header, config) {
			console.log(data);
		});
	}
	$scope.getEvalInfo();
	
//	$scope.teamname = "5조";
//	
//	$scope.user = [
//			{ name : "학생1" },
//			{ name : "학생2" },
//			{ name : "학생3" },
//			{ name : "학생4" }
//	];
//	$scope.prouser = "교수 1";
//	
//	$scope.scoreList = [
//		{ question : "작품의 내용과 제목이 적절하게 부합되었는가?", score : 2 , opinion : "맘에 든다" },
//		{ question : "작품의 내용이 독창적인가?", score : 4 , opinion : "싫다" },
//		{ question : "작품의 구성은 적절한가(목표설정, 요구분석, 설계, 구현 등)?", score : 8 , opinion : "부족하다" },
//		{ question : "작품의 완성도는?", score : 10 , opinion : "틀린것 같다" },
//		{ question : "작품에 대한 문서유지와 논문 구성은 적절한가?", score : 8 , opinion : "잘했다" },
//		{ question : "작품에 대한 소개문서는 적절한가?", score : 4 , opinion : "수정해라" },
//		{ question : "팀원간의 협력이 잘 이루어졌는가?", score : 2 , opinion : "애매하다asdafsdfdf애매하다asdafsdfdf애매하다asdaf" +
//				"sdfdf애매하다asdafsdfdf애매하다asdafsdfdf애매하다asdafsdfdf애매하다asdafsdfdf애매하다asdafsdfdf애매하" +
//				"다asdafsdfdf애매하다asdafsdfdf애매하다asdafsdfdf애매하다asdafsdfdf애매하다asdafsdfdf애매하다" +
//				"asdafsdfdf애매하다asdafsdfdff애매하다asdafsdfdf애매하다asdafsdfdf애매하다asdafsdfdf애매하다a" +
//				"sdafsdf애매하다asdafsdfdf애매하다asdafsdfdf애매하다asdafsdfdf애매하다asdafsdf애매하다asdafsdfdf애매" +
//				"하다asdafsdfdf애매하다asdafsdfdf애매하다asdafsdf애매하다asdafsdfdf애매하다asdafsdfdf애매하다asdafsdfdf애매하" +
//				"다asdafsdf애매하다asdafsdfdf애매하다asdafsdfdf애매하다asdafsdfdf애매하다asdafsdf애매하다asdafsdfdf애매하다asdafsdf" +
//				"df애매하다asdafsdfdf애매하다asdafsdf애매하다asdafsdfdf애매하다asdafsdfdf애매하다asdafsdfdf애매하다asdafsdf애매하다asdafsd" +
//				"fdf애매하다asdafsdfdf애매하다asdafsdfdf애매하다asdafsd" },
//		
//	];
//	$scope.totscore= 50; //총점을 불러온다
});
