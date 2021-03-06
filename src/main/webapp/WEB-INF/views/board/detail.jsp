<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<script src="/js/angularjs/1.5.11/angular.min.js"></script>
	<link rel="stylesheet" href="/js/bootstrap/3.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="/resources/css/board/detail.css">
    <script src="/resources/js/board/script.js"></script>
    
    <meta charset = "UTF-8">
    <title>글페이지</title>
    
</head>
<body data-ng-app="todo" data-ng-controller="DetailCtrl">
	<br/>
	<br/>
	<header>
	    <button type="button" class="btn btn-primary " data-ng-click="myPage()">마이 페이지</button>
	    <button type="button" class="btn btn-primary " data-ng-click="homePage()">홈으로 가기</button>
    </header>

    <section>
    	<div id= "postInfo">
			<div id = "title" >게시글 제목 : {{boardData.post_name}}</div>
            <div id = "title1">작성자 : {{boardData.name}}</div>
            <div id = "title2" >작성일 : {{boardData.postDate}}</div>
		</div>
		<br/>
		<button type="button" class="btn btn-success btn-sm" id = "download" 
		data-ng-if="boardData.file_name != ''" 
		data-ng-click="fileDownload()">{{boardData.file_name}} 파일 다운로드</button>
        <hr style="border: solid 1px Black; width: 100%; height: 1px;">   
        <pre id = "text">{{boardData.postField}}</pre>
        <br>
        <div>
        	<table class="table" id="commBox">
				<tbody>
					<tr data-ng-repeat="row in uni_comm">
						<td id="commName">{{row.name}}</td>
						<td>{{row.comm_date}}</td>
						<td><pre>{{row.std_comm}}</pre></td>
						<td><button type="button" class="btn btn-danger" 
						data-ng-click="delComm(row)">삭제</button></td>
					</tr>
				</tbody>
			</table>
        </div>
        <div id = "text1">
             <form name="todoForm">
	            <div class = "input-group">
	            	<input type="text" class="form-control input-lg" data-ng-model="commentValue" placeholder = "덧글을 입력 하세요">
	            <span class = "input-group-btn">
	                <button class="btn btn-success btn-lg btn-block" data-ng-click="setComm(commentValue)">등록</button>
	            </span>
	            </div>
            </form>
        <br>
<!--         <button type="button" class="btn btn-info btn-lg">글 수정</button> -->
        <button type="button" class="btn btn-danger btn-lg" data-ng-click="boardDelete()">글 삭제</button>
        </div>
             ​
    </section>
    <footer>

    </footer>
</body>

</html>
