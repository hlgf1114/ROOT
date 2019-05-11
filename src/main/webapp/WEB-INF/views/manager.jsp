<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>사용자 권한 설정</title>
    <link rel="stylesheet" href="/resources/css/manager.css">
    <link rel="stylesheet" href="/js/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="/js/angularjs/1.5.11/angular.min.js"></script>
    <script src = "/resources/js/manager.js"></script>
  </head>

  <body data-ng-app="manage" data-ng-controller="ManageCtrl">
    <header>
      <div id ="hd" >사용자 권한 설정 페이지 </div>
    </header>

    <section>
    	<input type="text" class="form-control" placeholder="Text input" data-ng-model="search">
   		<table class="table table-bordered table-striped">
			<thead class="thead-dark">
				<tr>
					<th>사용자 이름</th>
					<th>권한 지정</th>
					<th>적용</th>
				</tr>
			</thead>
			<tbody>
				<tr data-ng-repeat="row in user | filter: search">
					<td>{{row.name}}</td>
					<td>
					<select class="form-control" id="exampleFormControlSelect1">
					<option data-ng-repeat="x in manager" class="btn btn-default dropdown-toggle">{{x}}</option>
					</select>
					</td>
					<td><button type="button" class="btn btn-danger" data-ng-click="exit()">나가기</button></td>
				</tr>
			</tbody>
		</table>
    </section>
    <footer>
	  <button type="button" class="btn btn-primary btn-lg" data-ng-click="exit()">나가기</button>
    </footer>
  </body>
</html>
	