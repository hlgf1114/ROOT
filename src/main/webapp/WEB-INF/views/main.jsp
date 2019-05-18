<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>MainView</title>
        <script src="/js/angularjs/1.5.11/angular.min.js"></script>
		<link rel="stylesheet"
		href="/resources/lib/bootstrap-4.3.1-dist/css/bootstrap.min.css">
		<script src="/resources/lib/bootstrap-4.3.1-dist/js/bootstrap.min.js"></script>
        <script src="/js/jquery/3.3.1/dist/jquery.min.js"></script>
        
        <link rel="stylesheet" type="text/css" href="/resources/css/main.css" />
        <script src="/resources/js/main.js"></script>
        <script src="/resources/js/dirPagination.js"></script>
    </head>
    <body data-ng-app="Main" data-ng-controller="MainCtrl">
    	<br>
        <h2 id = "mainTitle">캡스톤 디자인 관리 시스템 메인 페이지</h2>
        <header>
       		<div id="but">
       			<button type="button" class="btn btn-primary bit" data-ng-click="relocated_mypage()">마이페이지</button>
       			<button type="button" class="btn btn-success bit" data-ng-click="relocated_board()">글쓰기</button>
       			<button type="button" class="btn btn-danger bit" data-ng-click="logout()">로그아웃</button>
       		</div>
			<div id = "my">
				<p id="welcomeId">{{info.name}}님 환영합니다.<p>
			</div>
        </header>
        <div id = "form">
        	<div id="evalNotice" data-ng-hide="disableEval()">
        		<p>평가가 진행중입니다.</p>
        		<button type="button" class="btn btn-danger" data-ng-click="checkEvalAuth()">평가하기</button>
        	</div>
	        <div id="notice">
	        	<div class="alert alert-primary" role="alert">
	  				공지사항
	  				<div id="showTable">
						<table class="table table-striped">
							<tbody>
								<tr data-ng-repeat="row in noticeList" data-ng-click="postEvent(row)">
									<td>{{row.post_name}}</td>
									<td>{{row.postDate}}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
	        </div>
			<section>
			<div>
				<div id="team">
					<div id="navButton">
						<button type="button" class="btn btn-info" id="bitTotal" data-ng-click="teamEvent()">전체보기</button>
						<div id="selectPostType">
							<div id="left">
								<select class="form-control" data-ng-model="selectedPostType"
									data-ng-options="postType.name for postType in postTypes">
									<option value="">--게시글 유형--</option>
								</select>
							</div>
							<div id="right">
								<select class="form-control" id="teamDrops"
								 data-ng-hide="disableButton()" data-ng-model="selectedTeam" 
								 data-ng-options="team.team_name for team in TeamList">
								<option value="">--팀 선택--</option>
								</select>
							</div>
						</div>
						<div id="searchButton">
							<button type="button" class="btn btn-info" id="searchTeam"
							 data-ng-click="teamEvent(selectedTeam, selectedPostType)">검색</button>
						</div>
					</div>
				</div>
				<div id="selectPostType">
					<button type="button" class="btn btn-info" data-ng-repeat="postType in postTypeList">{{postType}}</button>
				</div>
			</div>
			<br>
			<div id="showTable">
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
			</div>
	</section>
    <footer>
		<div id="pageNav">
			<nav aria-label="...">
			  <ul class="pagination pagination-sm">
			    <li class="page-item" data-ng-repeat="page in pagingList"><a class="page-link" data-ng-click="pagingEvent(page)">{{page}}</a></li>
			  </ul>
			</nav>
		</div>
    </footer>
    </div>
    </body>
</html>