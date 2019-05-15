<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="/resources/css/adminlogin.css" />
        <link rel="stylesheet"
		href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
		<script src="/js/angularjs/1.5.11/angular.min.js"></script>
		<script src="/resources/js/adminlogin.js"></script>
        <title>관리자</title>
    </head>
    <body data-ng-app="adminlogin" data-ng-controller="adminloginCtrl">
        <header>
        	<h2 class = "title">관리자 로그인 페이지</h2>
        </header>
        <form>
        <section>
        <div class = "loginform">
        <br>
	          <div>
	   			<label for="exampleInputEmail1">id</label>
	    		<input class="form-control" id="exampleInputEmail1" data-ng-model = "ID">
	  		  </div>
	  		  <div>
	    		<label for="exampleInputPassword1">sso</label>
	    		<input class="form-control" id="exampleInputPassword1" data-ng-model = "Password">
	  		  </div>
  		  </div>
        </section>
        <footer>
			<div class = "button">
	  	 		<button type="button" class="btn btn-success" data-ng-click="login(ID, Password)">관리자 로그인</button>
	  	 		<button type="button" class="btn btn-warning" data-ng-click="kakaologin()">카카오 로그인</button>
	    	</div>
        </footer>
      </form>
    </body>
</html>
