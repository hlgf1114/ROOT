<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>평가 리스트 페이지</title>
    <link rel="stylesheet" href="/resources/css/testing/evalsetting.css">
   	<link rel="stylesheet"
	href="/resources/lib/bootstrap-4.3.1-dist/css/bootstrap.min.css">
	<script src="/resources/lib/bootstrap-4.3.1-dist/js/bootstrap.min.js"></script>
    <script src="/js/angularjs/1.5.11/angular.min.js"></script>
    <script src = "/resources/js/testing/evalsetting.js"></script>
  </head>
  <body data-ng-app="evalSetting" data-ng-controller="EvalSetCtrl">
    <header>
      <div id = "team">평가할 팀</div>
      <div id = "pros">평가에 참여할 교수 선택</div>
    </header>
	<form>
    <section>
       	<article>
			<div data-ng-repeat="row in teamList" id = "teamlist">
				{{row.team_name}}
			</div>
		</article>
		<article>
			<div class="form-check" data-ng-repeat="row in profList" id = "proflist">
			  <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
			  <label class="form-check-label" for="defaultCheck1">
			    {{row.name}}
			  </label>
			</div>
    	</article>
    </section>
    <footer>
      <button type="button" class="btn btn-info btn-lg" data-ng-click="setEvalSetting()">평가를 시작 합니다</button>
	  <button type="button" class="btn btn-danger btn-lg" data-ng-click="exit()">평가를 취소 합니다</button>
    </footer>
    </form>
  </body>
</html>
	