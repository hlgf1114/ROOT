<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>평가팀 선택</title>
    <link rel="stylesheet" href="/resources/css/testing/evalselect.css">
   	<link rel="stylesheet"
	href="/resources/lib/bootstrap-4.3.1-dist/css/bootstrap.min.css">
	<script src="/resources/lib/bootstrap-4.3.1-dist/js/bootstrap.min.js"></script>
    <script src="/js/angularjs/1.5.11/angular.min.js"></script>
    <script src = "/resources/js/testing/evalselect.js"></script>
  </head>
  
  <body data-ng-app="evalselect" data-ng-controller="evalselectCtrl">
  	<h3 class = title>팀 평가</h3>
    <header>
      <h5 class ="title">평가할 팀을 선택해 주세요.</h5>
    </header>
    <section>
    <br>
       	<div class = "teamBox">       	
       		<table class="table table-striped">
					<thead class="thead-dark">
						<tr>
							<th scope="col">팀</th>
							<th scope="col">진행 상황</th>
							<th scope="col">평가 버튼</th>
						</tr>
					</thead>
					<tbody>
						<tr data-ng-repeat="team in teamlist">
							<td>{{team.name}}</td>
							<td>{{team.progresssituation}}</td>
							<td>
							<span>
       							<button type="button" class="btn btn-primary" data-ng-click="evaluate()">평가하기</button>
       						</span>
							</td>
						</tr>
					</tbody>
			</table>
		</div>
    </section>
    <footer>
    	<div class = "button">
	  	  <button type="button" class="btn btn-danger" data-ng-click="exit()">메인 페이지 이동</button>
	    </div>
    </footer>
  </body>
</html>
	