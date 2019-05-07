<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>MainView</title>
        <script src="/js/angularjs/1.5.11/angular.min.js"></script>
		<link rel="stylesheet" href="/js/bootstrap/3.4.1/css/bootstrap.min.css">
        <script src="/js/jquery/3.3.1/dist/jquery.min.js"></script>
    	<script src="/js/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        
        <link rel="stylesheet" type="text/css" href="/resources/css/MainView1_5.css" />
        <script src="/resources/js/MainViewSearchResult1_5.js"></script>
        <script src="/resources/js/dirPagination.js"></script>
    </head>
    
    
    
    <body data-ng-app="Main" data-ng-controller="MainCtrl">
        <h2 id = "mainTitle">캡스톤 디자인 관리 시스템 메인 페이지</h2>
        <header>
       		<div id="but">
       			<button type="button" class="btn btn-primary" id = "bit1" data-ng-click="relocated_mypage()">마이페이지</button>
       			<button type="button" class="btn btn-success" id = "bit2" data-ng-click="relocated_board()">글쓰기</button>
       			<button type="button" class="btn btn-danger" id = "bit3" data-ng-click="logout()">로그아웃</button>
       		</div>
			<div id = "my">
				<p id="welcomeId">{{info.name}}님 환영합니다.<p>
			</div>
        </header>
        <div id = "form">
		<section>
		<div id="team">
			<button type="button" class="btn btn-info" ng-hide="disableButton()" id = "bit4" data-ng-repeat="team in TeamList" data-ng-click="teamEvent(team)">{{team.team_name}}</button>
			<button type="button" class="btn btn-info" id = "bit5" data-ng-click="teamEvent()">전체보기</button>
		</div>
		<div id="selectPostType">
			<button type="button" class="btn btn-info" data-ng-repeat="postType in postTypeList">{{postType}}</button>
		</div>
			<table class="table table-striped">
				<thead class="thead-dark">
					<tr>
						<th scope="col">제목</th>
						<th scope="col">팀</th>
						<th scope="col">올린이</th>
						<th scope="col">시간</th>
					</tr>
				</thead>
				<tbody>
					<tr data-ng-repeat="row in MainList" data-ng-click="postEvent(row)">
						<td>{{row.post_name}}</td>
						<td>{{row.team_name}}</td>
						<td>{{row.name}}</td>
						<td>{{row.postDate}}</td>
					</tr>
				</tbody>
			</table>
	</section>
    <footer>
   		<div id="pageNav">
		    <ul class="pagination">
			    <li>
				    <a href="#" aria-label="Previous">
				    	<span aria-hidden="true">&laquo;</span>
				    </a>
			    </li>
			    <li data-ng-repeat="page in pagingList"><a data-ng-click="pagingEvent(page)">{{page}}</a></li>
			    <li>
				    <a href="#" aria-label="Next">
				    <span aria-hidden="true">&raquo;</span>
				    </a>
			    </li>
		    </ul>
	    </div>
    </footer>
    </div>
    </body>
</html>