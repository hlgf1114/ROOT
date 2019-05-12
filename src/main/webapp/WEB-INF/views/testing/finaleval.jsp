<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>최종 평가 페이지</title>
    <link rel="stylesheet" href="/resources/css/testing/finaleval.css">
   	<link rel="stylesheet"
	href="/resources/lib/bootstrap-4.3.1-dist/css/bootstrap.min.css">
	<script src="/js/jquery/3.3.1/dist/jquery.min.js"></script>
	<script src="/resources/lib/bootstrap-4.3.1-dist/js/bootstrap.min.js"></script>
    <script src="/js/angularjs/1.5.11/angular.min.js"></script>
    <script src = "/resources/js/testing/finaleval.js"></script>
  </head>
  <body data-ng-app="finalEval" data-ng-controller="FinalEvalCtrl">
  	<h3 class = "title">졸업작품 최종 심사서</h3>
    <header>
      <div class = "teamreport">팀 이름 : {{teamname}}<br> 팀원 :
      <span data-ng-repeat="team in user"> {{team.name}}  </span>
      </div>
    </header>
	<form>
    <section>
	    <div id="wrapper">
			<div class = "evaluator">
				<label for="exampleFormControlTextarea1">교수 평가 결과</label>
				<table class="table table-striped">
					<thead class="thead-dark">
						<tr>
							<th>평가 교수</th>
							<th>평가 점수</th>
							<th>결과</th>
						</tr>
					</thead>
					<tbody>
						<tr data-ng-repeat="evaluator in evaluateList">
							<td>{{evaluator.name}}</td>
							<td>{{evaluator.score}}</td>
							<td>{{evaluator.result}}</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class = "text">
				<label for="exampleFormControlTextarea1">--의견 작성--</label>
				<textarea class="form-control" rows="5" data-ng-model="advice.opinion"></textarea>
	 		</div>
	    	<div class = "lastselect">
	    		<label for="exampleFormControlTextarea1">--최종 결과 선택--</label>
	    		<br>
	    		<div class="btn-group btn-group-toggle" data-toggle="buttons">
				  <label class="btn btn-secondary">
				    <input type="radio" name="options" id="option1" autocomplete="off"> Active
				  </label>
				  <label class="btn btn-secondary">
				    <input type="radio" name="options" id="option2" autocomplete="off"> Radio
				  </label>
				  <label class="btn btn-secondary">
				    <input type="radio" name="options" id="option2" autocomplete="off"> Radio
				  </label>
				</div>
	    	</div>
    	</div>
    </section>
    <footer>
    	<div id="buttonWrapper">
      	  <button id="leftBtn" type="button" class="btn btn-success" data-ng-click="setEvalSetting()">최종 심사 완료</button>
	  	  <button type="button" class="btn btn-danger" data-ng-click="exit()">최종 심사 취소</button>
	    </div>
    </footer>
   </form>
  </body>
</html>
	