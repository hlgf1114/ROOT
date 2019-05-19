<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">

<link rel="stylesheet" type="text/css" href="/resources/css/testing/finalcheck.css" />
<script src="/js/angularjs/1.5.11/angular.min.js"></script>
<script src="/resources/js/testing/finalcheck.js"></script>

<link rel="stylesheet" href="/resources/lib/bootstrap-4.3.1-dist/css/bootstrap.min.css">

<title>최종 결과 확인 페이지</title>
</head>

<body data-ng-app="evalfinal" data-ng-controller="evalfinalCtrl">
	<h2 class = "title">최종 결과 확인 페이지</h2>
	<header> 
		<div class = "teamBox">
			<div>팀 이름 :{{info.team_name}} <br>팀원 :<span data-ng-repeat="row in teamInfo">{{row.name}}  </span> </div> 
			
		</div>
	</header>
	
	<section>
		<div class = finalBox>
			<label>교수 평가 결과</label>
			<div class = "prof">
				<table class="table table-striped">
					<thead class="thead-dark">
						<tr>
							<th scope="col">평가 교수</th>
							<th scope="col">결과</th>
						</tr>
					</thead>
					<tbody>
						<tr data-ng-repeat="eval in evalList" data-ng-click="">
							<td>{{eval.name}}</td>
							<td>{{checkPass(eval)}}</td>
						</tr>
					</tbody>
				</table>
			</div>
			
			<div class = "pass">
			<label class = "pass1">합격 여부</label>
			<div class = "pass2">{{finalPass()}}</div> 
			</div>
			
			<div class = "opinion ">
			<label>교수진 최종의견</label>
			<div>{{finalOpinion()}}</div> 
			</div>
		</div>
	</section>
		
	<footer>
		<div class = "boutton">
			<button type="button" class="btn btn-primary" data-ng-click="exit()">마이페이지 이동</button>
		</div>
	</footer>
</body>

</html>
