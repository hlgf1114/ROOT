var app = angular.module('todo', []);

app.controller('TodoCtrl', function($scope) {
    
	$scope.todo=
	      {
	   	  	  createdAt:Date.now()
	    	        
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
