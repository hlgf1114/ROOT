<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<script src="/js/angularjs/1.5.11/angular.min.js"></script>
	<link rel="stylesheet" href="/resources/lib/bootstrap-4.3.1-dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="/resources/css/board/write.css">
    <script src="/js/jquery/3.3.1/dist/jquery.min.js"></script>
    <script src="/resources/lib/bootstrap-4.3.1-dist/js/bootstrap.min.js"></script>
    <script src="/resources/js/board/script.js"></script>
    <meta charset = "UTF-8">
    <title>글 쓰기 페이지</title>
</head>
<body data-ng-app="todo" data-ng-controller="WriteCtrl">
	<br/>
	<br/>
	<header>
	    <button type="button" class="btn btn-primary " data-ng-click="myPage()">마이 페이지</button>
	    <button type="button" class="btn btn-primary " data-ng-click="homePage()">홈으로 가기</button>
    </header>
    <section>
    	<form>
			<div id="title">
				<div class="input-group">
					<label id="post_select">게시판 선택::</label>
					<div class="form-group">
					  <select class="form-control" id="exampleFormControlSelect1" data-ng-model="selectedPostType"
					   data-ng-options="postType.name for postType in postTypes" data-ng-hide="disableStd()">
					   <option value="">--게시글 선택--</option>
					  </select>
					  <select class="form-control" id="exampleFormControlSelect1" data-ng-model="selectedPostType"
					   data-ng-options="postType.name for postType in profPostTypes" data-ng-hide="disableProf()">
					   <option value="">--게시글 선택--</option>
					  </select>
					</div>
					<input type="text" class="form-control" id="post_name" data-ng-model="post_name"/>
				</div>
				<div class="filebox" >
	            	<label for="ex_file"> 파일 업로드</label>
	                <input type="file" id="ex_file" name="file">
	            </div>
			</div>
	        <div id = "text">
				<div class="form-group">
	    			<textarea class="form-control" rows="15" id="post_field" data-ng-model="postField" placeholder="내용을 입력해주세요"></textarea>
	  			</div>
			</div>
        </form>​
    </section>
    <br/>
    <footer>
		<button type="button" class="btn btn-success btn-lg" data-ng-click="btnEvent()">글 등록</button>
		<button type="button" class="btn btn-danger btn-lg" data-ng-click="close()">글 취소</button>
    </footer>
</body>
</html>