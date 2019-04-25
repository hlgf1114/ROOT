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
        <header>
       		<div id="but">
       			<button type="button" class="btn btn-primary" id = "bit1" data-ng-click="relocated_mypage()">마이페이지</button>
       			<button type="button" class="btn btn-success" id = "bit2" data-ng-click="relocated_board()">글쓰기</button>
       			<button type="button" class="btn btn-danger" id = "bit3" data-ng-click="logout()">로그아웃</button>
       		</div>
			<div id = "nsu">남서울 대학교 졸작 메인 페이지</div>
			<div id = "my">OOO님 환영합니다.</div>
        </header>
        <div id = "form">
		<section>
		<div id="team">
			<button type="button" class="btn btn-info" id = "bit4" data-ng-repeat="team in TeamList" data-ng-click="teamEvent(team)">{{team.team_name}}</button>
			<button type="button" class="btn btn-info" id = "bit5" data-ng-click="teamEvent()">전체보기</button>
		</div>
		
			<table class="table table-bordered" border="1">
			<tr class="active">
				<td>제목</td>
				<td>팀</td>
				<td>올린이</td>
				<td>시간</td>
				
			</tr>
			
			<tr data-ng-repeat="row in MainList" data-ng-click="postEvent(row)">
				<th scope="row">{{row.post_name}}</th>
				<td>{{row.team_name}}</td>
				<td>{{row.name}}</td>
				<td>{{row.postDate}}</td>
			</tr>
			</table>
		
	</section>
    <footer>
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
    </footer>
    </div>
    </body>
</html>