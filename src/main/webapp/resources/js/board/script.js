var app = angular.module('todo', []);

app.controller('DetailCtrl', function($scope, $http) {
	
	$scope.getPost = function() {
		var href = location.href;
		var params = href.substring(href.indexOf("?") + 1, href.length);
		var value = params.split("=")[1];
		$scope.params = {
				post_num : value
		};
		console.log($scope.params);
		
		$scope.boardData = {};
		
		$http({method: 'POST', url:"/Board/Select", params: $scope.params})
		.success(function (data, status, headers, config) {
			console.log(data);
			$scope.boardData = data;
		})
		.error(function (data, status, header, config) {
			console.log(data);
		});
		
		return value;
	}
	$scope.post_num = $scope.getPost();
	
	$scope.boardDelete = function() {
		// 해쉬맵으로 변환
		var param = {post_num : $scope.post_num};
		$http({method: 'POST', url:"/Board/Delete", params: param})
		.success(function(data, status, headers, config) {
			console.log("post_num" + $scope.post_num);
			console.log(data);
		})
		.error(function(data, status, header, config) {
			
		});
		location.href = "/main";
	}
	
	$scope.fileDownload = function(){
		var link = document.createElement("a");
	    link.download = $scope.boardData.file_name;
	    link.href = "http://xorms2485.cafe24.com/" + $scope.boardData.url;
	    link.target = "_blank";
	    link.click();
	}
	
	
	$scope.myPage = function(){
		location.href = "/mypage";
	}
	
	$scope.homePage = function(){
		location.href = "/main";
	}
	
    
	
});

app.controller('WriteCtrl', function($scope, $http) {
	
	$scope.myPage = function(){
		location.href = "/mypage";
	}
	
	$scope.homePage = function(){
		location.href = "/main";
	}
	
    
	$scope.todo=
	      {
	   	  	  createdAt:Date.now()
	    	        
	      }
	
	$scope.btnEvent = function(){
		$scope.file = document.querySelector('#ex_file').files;
		console.log($scope.file);
		var param = {};
		
		param.postField = $scope.postField;
		param.post_name = $scope.post_name;

		if($scope.file.length > 0){
			var formData = new FormData();
			formData.append("uni_num", "1");
			formData.append('file', $scope.file[0]);
			
			$http.post("http://xorms2485.cafe24.com/FileStore/", formData, {
			    transformRequest: angular.identity,
			    headers: {'Content-Type': undefined}
			})
			.success(function (data, status, headers, config) {
				console.log(data);
				
				if(data.state == 1){
					param.file_name = data.file_name;
					param.url = data.url;					
				} else {
					// 알아서...
				}
				
				$scope.writeEvent(param);
			})
			.error(function (data, status, header, config) {
				console.log(data);
			});
		}else {
			$scope.writeEvent(param);
		}		
	}
	
	$scope.writeEvent = function(data){
		console.log(data);
		
		
		$http({method: 'POST', url:"/Board/Insert", params: data})
		.success(function (data, status, headers, config) {
			console.log(data);
			if(data.state == 1){
				$scope.homePage();
			} else {
				alert("저장 실패!!");
			}
		})
		.error(function (data, status, header, config) {
			console.log(data);
		});
	}
	
	$scope.close = function(){
		location.href = "/main";
	}
});

function openTextFile() {
    var input = document.createElement("input");
 
    input.type = "file";
    input.accept = "text/plain";
 
    input.onchange = function (event) {
        processFile(event.target.files[0]);
    };
 
    input.click();
}
 
function processFile(file) {
    var reader = new FileReader("text.txt");
 
    reader.onload = function () {
        output.innerText = reader.result;
    };
 
    reader.readAsText(file, /* optional */ "euc-kr");
}
