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
    <body data-ng-app="MainResult" data-ng-controller="SearchData as list">
        <header>
            <div id="search">
				<br/>
        			<div id=myPageButton>
        			<button type="button" class="btn btn-default" data-ng-click="relocated_mypage()">마이페이지</button>
        			<button type="button" class="btn btn-default">글쓰기</button>
        			<button type="button" class="btn btn-default">로그아웃</button>
        			
        			</div>
        		<h1>MainView</h1>
    		</div>
			<div id="personalInformation">
			<p id="userName">____님 안녕하세요.</p>
			</div>
        </header>
	<section>
		<div id="searchGroup">
		<div class="SearchSelect1">
			<form name="searchTeam">
			<button type="button" class="btn btn-info" data-ng-click="setTeamFilter({team:'1'})">1조</button>
			<button type="button" class="btn btn-info" data-ng-click="setTeamFilter({team:'2'})">2조</button>
			<button type="button" class="btn btn-info" data-ng-click="setTeamFilter({team:'3'})">3조</button>
			</form>
		</div>
		
		<div class="SearchSelect2">
			<form name="orderSelecter">
			<!--  <button type="button" class="btn btn-info">날짜순</button>-->
			<button type="button" class="btn btn-info" data-ng-click="setNameSort('title')" ><span data-ng-show="propertyName==='name'" data-ng-class="{reverse:reverse}"></span>제목 이름순</button>
			
			<!--  <button type="button" class="btn btn-info">수정순</button>-->
			</form>
		</div>
		
		<div class="SearchSelect3">
			<form name="sectionSelecter">
			<button type="button" class="btn btn-primary" data-ng-click="setDocFilter({docType:'회의록'})">회의록</button>
			<button type="button" class="btn btn-primary" data-ng-click="setDocFilter({docType:'발표자료'})">발표자료</button>
			<button type="button" class="btn btn-primary" data-ng-click="setDocFilter({docType:'중간평가'})">중간평가</button>
			<button type="button" class="btn btn-primary" data-ng-click="setDocFilter({docType:'기말평가'})">기말평가</button>
			<button type="button" class="btn btn-primary" data-ng-click="setDocFilter({docType:'총평가'})">총평가</button>
			<button type="button" class="btn btn-primary" data-ng-click="setDocFilter({docType:'제안평가'})">제안평가</button>	 
			</form>
		</div>
		<div class="SearchReload">
		<button type="button" class="btn btn-primary" data-ng-click="setAllFilter({docType:''},{team:''}, {page:''})">전체보기</button>
		</div>
		
		
		<div class="SearchResult">
		<form name="ResultForm">
			<table class="table table-hover" border="1">
			<tr class="active">
				<td>팀</td>
				<td>올린이</td>
				<td>제목</td>
				<td>시간</td>
				
			</tr>
			<tr class="active" dir-paginate="MainResult in data | itemsPerPage:5 | filter:docFilter | filter:uploaderFilter | filter:teamFilter | filter:allFilter | 
			filter:pageFilter | orderBy:propertyName:reverse" >
				<td>{{MainResult.team}}조</td>
				<td>{{MainResult.user}}</td>
				<td>{{MainResult.title}}</td>
				<td><date>{{MainResult.uploadDate | date:"yyyy-MM-dd HH:mm:ss"}}</date></td>
				
			</tr>
				<!--  <tr>
					<td>올린이</td><td>제목</td><td>시간</td><td>다운로드</td>
				</tr>-->
			</table>
		</form>
		
	</div>
		</div>
	</section>
    <footer>
	    <!--  <nav aria-label="Page navigation">
		    <ul class="pagination">
			    <li>
				    <a href="#" aria-label="Previous">
				    	<span aria-hidden="true">&laquo;</span>
				    </a>
			    </li>
			    <li><a ng-click="setPageFilter({page:'1'})">1</a></li>
			    <li><a ng-click="setPageFilter({page:'2'})">2</a></li>
			    <li><a ng-click="numOfPages()">3</a></li>
			    <li><a href="#">4</a></li>
			    <li><a href="#">5</a></li>
			    <li>
				    <a href="#" aria-label="Next">
				    <span aria-hidden="true">&raquo;</span>
				    </a>
			    </li>
		    </ul>
	    </nav>-->
	    <dir-pagination-controls
	    max-size="5"
	    direction-links="true"
	    boundary-links="true">
	    </dir-pagination-controls>
	    
    </footer>
    </body>
</html>