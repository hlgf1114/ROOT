var as = angular.module('evaluatelist',[]);

as.controller('evaluatelistctrl', function($scope,$http) {
	
	
	$scope.exit = function(){
		location.href =  " ";
    }
	$scope.stert = function(){
		location.href =  " ";
    }
	
	$scope.team = [ //데이터 베이스에서 팀의 정보와 평가한 유저(교수)의 정보를 가지고 와야함
		{id : "1팀"},
		{id : "2팀"},
		{id : "3팀"},
		{id : "4팀"},
		{id : "5팀"},
		{id : "6팀"}
	];
	$scope.responsibility = function(row){
		console.log(row) //클릭터 받아온 팀의 값과 교수의 값을 인자 값으로 sql 조회에 그팀의 설문 결과(토틸 점수 , 평가 교수, 결과,진행 상황)를 가지고 와야함
		
	};
	$scope.pro = [//그후 받아온 점수를 출력 해줘야한다.
		{id : "1팀", progress :"진행중" , name : "1팀", result : "통과"},
		{id : "2팀",progress :"완료" , name : "김정길", result : "보류"},
		{id : "3팀",progress :"진행중" , name : "송은지", result : "탈락"},
		{id : "4팀",progress :"완료" , name : "몰라" , result : "통과"},
		{id : "5팀",progress :"진행중" , name : "암거나", result : "탈락"},
		{id : "6팀",progress :"진행중" , name : "사람" , result : "보류"}
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
