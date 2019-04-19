var app = angular.module('add', []);

app.controller('liCtrl', function($scope) {
  $scope.question = [
  ];

  $scope.choices = [{"id": 1}];


$scope.index = $scope.choices.length;

$scope.fstbtn = function() {
  var newItemNo = ++$scope.index;
  $scope.choices.push({'id':newItemNo});
  $scope.$apply();
};

$scope.tchoices = [{"id": 1}];

$scope.index = $scope.tchoices.length;

$scope.sndbtn = function(){
	var newItemNo = ++$scope.index;
	$scope.tchoices.push({'id':newItemNo});
	$scope.$apply();
};
//
$scope.thchoices = [{"id": 1}];

$scope.index = $scope.thchoices.length;

$scope.thdbtn = function(three){
	var newItemNo = ++$scope.index;
	$scope.thchoices.push({'id':newItemNo});
	$scope.$apply();
};

// choices
$scope.removebtn = function(id) {

      if($scope.choices.length<=1){
          alert("더이상 삭제 할 수 없습니다");
          return;
      }

      //var List

      var index = -1;
  		var comArr = eval( $scope.choices );
  		for( var i = 0; i < comArr.length; i++ ) {
  			if( comArr[i].id === id) {
  				index = i;
  				break;
  			}
  		}

  		$scope.choices.splice( index, 1 );
};

$scope.tremovebtn = function(id) {

      if($scope.tchoices.length<=1){
          alert("더이상 삭제 할 수 없습니다");
          return;
      }

      //var List

      var index = -1;
  		var comArr = eval( $scope.tchoices );
  		for( var i = 0; i < comArr.length; i++ ) {
  			if( comArr[i].id === id) {
  				index = i;
  				break;
  			}
  		}

  		$scope.tchoices.splice( index, 1 );
};

$scope.thremovebtn = function(id) {

      if($scope.thchoices.length<=1){
          alert("더이상 삭제 할 수 없습니다");
          return;
      }

      //var List

      var index = -1;
  		var comArr = eval( $scope.thchoices );
  		for( var i = 0; i < comArr.length; i++ ) {
  			if( comArr[i].id === id) {
  				index = i;
  				break;
  			}
  		}

  		$scope.thchoices.splice( index, 1 );
};
      //tchoices

});
