var app = angular.module('todo', []);

app.controller('DetailCtrl', function($scope, $http) {
	
	$scope.info = {};

	$scope.getData = function(){
		$http({method: 'GET', url:"/mypage/studentSelect"})
		.success(function (data, status, headers, config) {
			console.log(data);
			$scope.info = data;	
		})
		.error(function (data, status, header, config) {
			console.log(data);
			$scope.info= {};
		});
	}
	$scope.getData();
	
	
	function replaceAll(str, searchStr, replaceStr) {
		  return str.split(searchStr).join(replaceStr);
	}
	
	$scope.boardData = {};
	$scope.getPost = function() {
		var href = location.href;
		var params = href.substring(href.indexOf("?") + 1, href.length);
		var value = params.split("=")[1];
		$scope.params = {
				post_num : value
		};
		console.log($scope.params);
		
		$http({method: 'POST', url:"/Board/Select", params: $scope.params})
		.success(function (data, status, headers, config) {
			console.log(data);
//			data.postField = replaceAll(data.postField, "\n", "<br>");
			$scope.boardData = data;
		})
		.error(function (data, status, header, config) {
			console.log(data);
		});
		
		return value;
	}
	$scope.post_num = $scope.getPost();
	
	$scope.boardDelete = function() {
		if($scope.boardData.uni_num == $scope.info.uni_num) {
			var selected = confirm("정말로 이 글을 삭제하시겠습니까?");
			if(selected) {
				$http({method: 'POST', url:"/Board/Delete", params: $scope.boardData})
				.success(function(data, status, headers, config) {
					console.log("post_num" + $scope.post_num);
					console.log(data);
				})
				.error(function(data, status, header, config) {
					
				});
				location.href = "/main";
			}
		}
		else {
			alert("작성자만 게시글을 삭제할 수 있습니다.");
		}
	}
	
	$scope.fileDownload = function(){
		var link = document.createElement("a");
		console.log($scope.boardData.url);
	    link.download = $scope.boardData.file_name;
	    link.href = "http://xorms2485.cafe24.com/" + $scope.boardData.url;
	    link.target = "_blank";
	    link.click();
	}
	
	// 댓글 관련 기능
	$scope.setComm = function(comment) {
		var param = {std_comm : comment,
					 uni_num : $scope.info.uni_num,
					 post_num : $scope.params.post_num};
		console.log(param);
		
		$http({method: 'POST', url:"/Board/setComm", params: param})
		.success(function (data, status, headers, config) {
			console.log(data);
			if(data.state == 1) {
				alert("댓글이 등록 되었습니다.");
				location.href = "/board/detail?post_num=" + $scope.params.post_num;
			}
			else
				alert("댓글 등록에 실패하였습니다.");
		})
		.error(function (data, status, header, config) {
			console.log(data);
		});
		
	}
	
//	$scope.uni_comm = {};
	$scope.getComment = function() {
		$http({method: 'POST', url:"/Board/getComment", params: $scope.params})
		.success(function (data, status, headers, config) {
			console.log(data);
			$scope.uni_comm = data;
		})
		.error(function (data, status, header, config) {
			console.log(data);
		});
		
	}
	// 댓글도 가져온다.
	$scope.getComment()
	
	$scope.delComm = function(row) {
		if($scope.info.uni_num == row.uni_num) {
			$http({method: 'POST', url:"/Board/delComm", params: row})
			.success(function (data, status, headers, config) {
				console.log(data);
				if(data.state == 1)
					alert("댓글이 삭제 되었습니다.");
				else
					alert("댓글을 삭제하지 못했습니다.");
				
				location.href = "/board/detail?post_num=" + $scope.params.post_num;
			})
			.error(function (data, status, header, config) {
				console.log(data);
			});
		}
		else
			alert("자신의 댓글만 삭제 할 수 있습니다.");
	}
	
	$scope.myPage = function(){
		location.href = "/mypage";
	}
	
	$scope.homePage = function(){
		location.href = "/main";
	}
	
    
	
});

app.controller('WriteCtrl', function($scope, $http) {
	
	$scope.info = {};
	$scope.getData = function(){
		$http({method: 'GET', url:"/mypage/studentSelect"})
		.success(function (data, status, headers, config) {
			console.log(data);
			$scope.info = data;	
		})
		.error(function (data, status, header, config) {
			console.log(data);
			$scope.info= {};
		});
	}
	$scope.getData();
	
	$scope.myPage = function(){
		location.href = "/mypage";
	}
	
	$scope.homePage = function(){
		location.href = "/main";
	}
	
	$scope.disableStd = function() {
		if($scope.info.authorization == 0 || $scope.info.authorization == 1)
			return false;
		else
			return true;
	}
	
	$scope.disableProf = function() {
		if($scope.info.authorization == 2 || $scope.info.authorization == 3)
			return false;
		else
			return true;
	}
	
	$scope.postTypes = [
		{"postType": 2, "name": "회의록"},
		{"postType": 3, "name": "제안서"},
		{"postType": 4, "name": "요구분석서"},
		{"postType": 5, "name": "설계서"},
		{"postType": 6, "name": "구현서"},
		{"postType": 7, "name": "형성관리서"},
		{"postType": 8, "name": "메뉴얼"},
		{"postType": 9, "name": "최종보고서"}
	];
	
	$scope.profPostTypes = [
		{"postType": 1, name: "공지사항"}
	]
	
	$scope.selectedPostType ={};
	
	$scope.chooseType = function() {
		console.log($scope.selectedPostType);
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
		param.postType = $scope.selectedPostType["postType"];

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
