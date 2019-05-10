<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html data-ng-app="as">
  <head>
    <meta charset="utf-8">
    <title>평가 리스트 페이지</title>
    <link rel="stylesheet" href="/resources/css/testing/appraisalselect.css">
    <link rel="stylesheet" href="/js/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="/js/angularjs/1.5.11/angular.min.js"></script>
    <script src = "/resources/js/testing/appraisalselect.js"></script>
  </head>

  <body data-ng-controller="actrl">
    <header>
      <div id = "team">평가가 가능한 팀의 리스트</div>
      <div id = "pros">평가에 참여할 교수 선택</div>
    </header>
	<form>
    <section>
       	<article>
			<div data-ng-repeat="row in team" id = "a">
				{{row.name}}
			</div>
		</article>
		<article>
		
    		<div data-ng-repeat="row in pro" id = "b">
				
	  				<input type="checkbox" > 
				
				{{row.name}}
			</div>
    	
    	</article>
  
    </section>
    

    <footer>
      <button type="button" class="btn btn-info btn-lg" data-ng-click="stert()">평가를 시작 합니다</button>
	  <button type="button" class="btn btn-danger btn-lg" data-ng-click="exit()">평가를 취소 합니다</button>
    </footer>
    </form>
  </body>
</html>
	