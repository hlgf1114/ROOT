var app = angular.module('todo', []);

app.controller('TodoCtrl', function($scope, $http) {
    
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
		
		
		$http({method: 'POST', url:"/Board/Insert", data: data})
		.success(function (data, status, headers, config) {
			console.log(data);			
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
