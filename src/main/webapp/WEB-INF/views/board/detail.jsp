<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<script src="/js/angularjs/1.5.11/angular.min.js"></script>
	<link rel="stylesheet" href="/js/bootstrap/3.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="/resources/css/board/style.css">
    <script src="/resources/js/board/script.js"></script>
    
    <meta charset = "UTF-8">
    <title>글페이지</title>
    
</head>
<body data-ng-app="todo" data-ng-controller="TodoCtrl">

	<header>
	    <button type="button" class="btn btn-primary ">마이 페이지</button>
	    <button type="button" class="btn btn-primary ">홈으로 가기</button>
    </header>

    <section>
        <nav>
        
			<div id = "title" > 제목</div>
            <div id = "title1">업로드 한사람</div>
            <div class="filebox" >
            	<label for="ex_file"> 파일 다운로드</label>
                <input type="file" id="ex_file">
            </div>
            <div id = "title2" >{{todo.createdAt}}</div>
        </nav>
        
        <hr style="border: solid 1px Black; width: 100%; height: 1px;">   
        
        <div id = "text">

		<button onclick="openTextFile()">Open</button>
		<div id='output' style=" font: 0.5em/1em Georgia, serif ; ">...</div>
        </div>
        
        <br>
        <div id = "text1">
             <form name="todoForm" data-ng-submit="add(newTodoTitle)">
            <div class = "input-group">
            <input type="text" class="form-control input-lg" data-ng-model="newTodoTitle" placeholder = "덧글을 입력 하세요..." minlength="3">
            <span class = "input-group-btn">
                <button class="btn btn-success btn-lg btn-block" type="submit">등록</button>
            </span>
            </div>
            </form>
        <br>
        <button type="button" class="btn btn-info btn-lg">글 수정</button>
        <button type="button" class="btn btn-danger btn-lg">글 삭제</button>
        </div>
             ​
    </section>
    <footer>

    </footer>
</body>

</html>
