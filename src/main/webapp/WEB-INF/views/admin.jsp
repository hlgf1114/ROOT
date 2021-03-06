<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>사용자 권한 설정</title>
    <link rel="stylesheet" href="/resources/css/admin.css">
    <link rel="stylesheet" href="/js/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="/js/angularjs/1.5.11/angular.min.js"></script>
    <script src = "/resources/js/admin.js"></script>
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
					<th>사용자 번호</th>
					<th>사용자 이름</th>
					<th>권한</th>
					<th>권한 지정</th>
					<th>적용</th>
				</tr>
			</thead>
			<tbody>
				<tr data-ng-repeat="row in user">
					<td>{{row.uni_num}}</td>
					<td>{{row.name}}</td>
					<td>{{row.authorization}}</td>
					<td>
					<select class="form-control" data-ng-options="x.authName for x in manager" data-ng-model="selectedAuth">
						<option class="btn btn-default dropdown-toggle" value="">--권한선택--</option>
					</select>
					</td>
					<td>
						<button type="button" class="btn btn-danger" data-ng-click="setAuth(selectedAuth, row)">적용</button>
					</td>
				</tr>
			</tbody>
		</table>
    </section>
    <footer>
	  <button type="button" class="btn btn-primary btn-lg" data-ng-click="exit()">로그아웃 및 나가기</button>
    </footer>
  </body>
</html>
	