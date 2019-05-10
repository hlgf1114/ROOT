<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html data-ng-app="evaluatelist">
  <head>
    <meta charset="utf-8">
    <title>평가 시작을 위한 페이지</title>
    <link rel="stylesheet" href="/resources/css/testing/evalresult.css">
    <link rel="stylesheet" href="/js/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="/js/angularjs/1.5.11/angular.min.js"></script>
    <script src = "/resources/js/testing/evalresult.js"></script>
  </head>

  <body data-ng-controller="evaluatelistctrl">
    <header>
      <div id = "evaluate">평가들의 리스트 </div>
    </header>

    <section>
       	<div id = "case">
			<div data-ng-repeat="row in team" id = "a" data-ng-click = "responsibility(row)">
				{{row.id}}
			</div>
		
		<article>
    		
    		<table class="table table-striped">
				<thead class="thead-dark">
					<tr>
						<th scope="col">진행 상황</th>
						<th scope="col">담당 교수</th>
						<th scope="col">결과</th>
					</tr>
				</thead>
				<tbody>
					<tr data-ng-repeat="row in pro" id = "b">
						<td>{{row.progress}}</td>
						<td>{{row.name}}</td>
						<td>{{row.result}}</td>
					</tr>
				</tbody>
			</table>
		<button type="button" class="btn btn-info btn-lg" data-ng-click="stert()">최종 결과</button>
    
    	</article>
  </div>
    </section>
    

    <footer>
	  <button type="button" class="btn btn-danger btn-lg" data-ng-click="exit()">평가를 종료 합니다</button>
    </footer>
  </body>
</html>
	