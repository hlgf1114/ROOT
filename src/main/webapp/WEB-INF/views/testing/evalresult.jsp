<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html data-ng-app="evaluatelist">
  <head>
    <meta charset="utf-8">
    <title>팀별 심사 리스트</title>
    <link rel="stylesheet" href="/resources/css/testing/evalresult.css">
<!--     <link rel="stylesheet" href="/js/bootstrap/3.4.1/css/bootstrap.min.css"> -->
<!--     <script src="/js/angularjs/1.5.11/angular.min.js"></script> -->
    
    <link rel="stylesheet"
	href="/resources/lib/bootstrap-4.3.1-dist/css/bootstrap.min.css">
	<script src="/js/jquery/3.3.1/dist/jquery.min.js"></script>
	<script src="/resources/lib/bootstrap-4.3.1-dist/js/bootstrap.min.js"></script>
    <script src="/js/angularjs/1.5.11/angular.min.js"></script>
    
    
    
    <script src = "/resources/js/testing/evalresult.js"></script>
  </head>

  <body data-ng-controller="evaluatelistctrl">
    <header>
      <div class = "evaluate">팀별 심사 리스트 </div>
    </header>

    <section>
    <article>
    		
    		<table class="table table-striped">
				<thead class="thead-dark">
					<tr>
						<th scope="col">교수님 이름</th>
						<th scope="col">결과</th>
					</tr>
				</thead>
				<tbody>
					<tr data-ng-repeat="row in selectedTeamList" id = "proBox">
						<td>{{row.name}}</td>
						<td>{{getResultEval(row)}}</td>
					</tr>
				</tbody>
			</table>
		<div class = "button1">
			<button type="button" class="btn btn-success btn-round" data-ng-click=" final()">최종 평가 하기</button>
    	</div>
    	</article>
    	<article>
			<div data-ng-repeat="row in teamList" 
			id = "teamBox" data-ng-click = "getEvalList(row)">
				{{row.team_name}}
			</div>
		</article>
		<div class = "button2">
			<button type="button" class="btn btn-info btn-round" data-ng-click="myPage()">마이페이지 이동</button>
	    	<button type="button" class="btn btn-danger btn-round" data-ng-click="exit()">평가를 종료 합니다</button>
	    </div>
    </section>
  </body>
</html>
	