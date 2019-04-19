<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<script src="/js/angularjs/1.5.11/angular.min.js"></script>
	<link rel="stylesheet" href="/resources/lib/bootstrap-4.3.1-dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="/resources/css/board/s.css">
    <script src="/js/jquery/3.3.1/dist/jquery.min.js"></script>
    <script src="/resources/lib/bootstrap-4.3.1-dist/js/bootstrap.min.js"></script>
    <script src="/resources/js/board/script.js"></script>
    <meta charset = "UTF-8">
    <title>글 쓰기 페이지</title>
    
</head>

<body data-ng-app="todo" data-ng-controller="TodoCtrl">

	<header>
	    <button type="button" class="btn btn-primary ">마이 페이지</button>
	    <button type="button" class="btn btn-primary ">홈으로 가기</button>
    </header>

    <section>
        <nav>
			<div id = "title" >
			<div class="input-group">
			
			<div class="input-group-btn">
	    		<button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">게시판 선택<span class="caret"></span></button>
	       		 <ul class="dropdown-menu" role="menu">
	       		   <li><a href="#">회의록</a></li>
	       		   <li><a href="#">제출물</a></li>
	      		    <li><a href="#">기타 </a></li>
	      		  </ul>
  			</div>
  				<input type="text" class="form-control" aria-label="...">
			</div>
			</div>
			
            <div class="filebox" >
            	<label for="ex_file"> 파일 업로드</label>
                <input type="file" id="ex_file">
            </div>
            
        </nav>
        <br>
        
        <hr style="border: solid 1px Black; width: 100%; height: 1px;">   
        
        <div id = "text">
			<div class="form-group">
    			<label for="exampleInputPassword1"></label>
    			<textarea style="resize: none;" class="form-control" rows="33" id="comment" placeholder="내용을 입력해주세요"></textarea>
  			</div>
        	<br>
        	<button type="button" class="btn btn-success btn-lg ">글 등록</button>
        	<button type="button" class="btn btn-danger btn-lg">글 삭제</button>
		</div>
             ​
    </section>
    <footer>

    </footer>
</body>

</html>