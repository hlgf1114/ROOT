var mypage = angular.module('student', []);

mypage.controller('StdCtrl', function($scope) {

	$scope.info = {
		name : '김점구',
		/*stdNum : '16100776',*/
		dept : 'Computer-Software',
		address : "오산시 수청동 등등등",
		team : "캡틴 아메리카"
	};
	
	
	$scope.data=[
	{
		name:"김승빈",
		stdnum:"16100000",
		team:"1",
		midEx: 100,
		finEx: 50,
	},
	{
		name:"송태근",
		stdnum:"16100001",
		team:"3",
		midEx:100,
		finEx:100,
	},
	{
		name:"이준혁",
		stdnum:"16100002",
		team:"5",
		midEx:50,
		finEx:50,
	},
	{
		name:"유령",
		stdnum:"00000000",
		team:"6",
		midEx:100,
		finEx:100,
	},
	{
		name:"정용석",
		stdnum:"16100003",
		team:"7",
		midEx:100,
		finEx:100,
	}
		
	];
	
	$scope.teamScore={
			vaild:"0",
			team1: ($scope.data[0].midEx +  $scope.data[0].finEx)/2,
			team3: ($scope.data[1].midEx +  $scope.data[1].finEx)/2,
			team5: ($scope.data[2].midEx +  $scope.data[2].finEx)/2,
			team6: ($scope.data[3].midEx +  $scope.data[3].finEx)/2,
			team7: ($scope.data[4].midEx +  $scope.data[4].finEx)/2
	}
		
		
	
	/*$scope.mainView = 'http://www.naver.com';*/

	$scope.loginDate = Date.now();

	$scope.relocated_mainView = function() {

		window.location = "MainView1_5.html";
	}
	
	$scope.setTeamFilter = function(input) {
        $scope.uploaderFilter = '';
        $scope.teamFilter = input;
        console.log($scope.uploaderFilter);
    };
    

});
