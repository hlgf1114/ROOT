<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>점수 확인 페이지</title>
    <link rel="stylesheet" href="/resources/css/testing/evalread.css">
   	<link rel="stylesheet"
	href="/resources/lib/bootstrap-4.3.1-dist/css/bootstrap.min.css">
	<script src="/resources/lib/bootstrap-4.3.1-dist/js/bootstrap.min.js"></script>
    <script src="/js/angularjs/1.5.11/angular.min.js"></script>
    <script src = "/resources/js/testing/evalread.js"></script>
  </head>
  
  <body data-ng-app="evaluateRead" data-ng-controller="evaluateReadCtrl">
  	<h3 class = "title">교수 평가 내용 확인 페이지</h3>
    <header>
      <div class = "teamreport">팀 이름 : {{teamname}}<br> 팀원 :
      <span data-ng-repeat="team in user"> {{team.name}}  </span>
      <div>평가 교수 : {{prouser}}</div>
      </div>
    </header>
    <section>
       	
		<div class = "select">
			<div>
				<div class = "question">1.작품의 내용과 제목이 적절하게 부합되었는가?</div>
				<div class = "score">받은 점수 : {{evalInfo.article1}}</div>
				<div class = "opinion">의견 : {{evalInfo.article1_opinion}}</div> <!-- 내용에따라 길이 변경 -->
				<br/>
			</div>
			<div>
				<div class = "question">2.작품의 내용이 독창적인가?</div>
				<div class = "score">받은 점수 : {{evalInfo.article2}}</div>
				<div class = "opinion">의견 : {{evalInfo.article2_opinion}}</div> <!-- 내용에따라 길이 변경 -->
				<br/>
			</div>
			<div>
				<div class = "question">3.작품의 구성은 적절한가(목표설정, 요구분석, 설계, 구현 등)?</div>
				<div class = "score">받은 점수 : {{evalInfo.article3}}</div>
				<div class = "opinion">의견 : {{evalInfo.article3_opinion}}</div> <!-- 내용에따라 길이 변경 -->
				<br/>
			</div>
			<div>
				<div class = "question">4.작품의 완성도는?</div>
				<div class = "score">받은 점수 : {{evalInfo.article4}}</div>
				<div class = "opinion">의견 : {{evalInfo.article4_opinion}}</div> <!-- 내용에따라 길이 변경 -->
				<br/>
			</div>
			<div>
				<div class = "question">5.작품에 대한 문서유지와 논문 구성은 적절한가?</div>
				<div class = "score">받은 점수 : {{evalInfo.article5}}</div>
				<div class = "opinion">의견 : {{evalInfo.article5_opinion}}</div> <!-- 내용에따라 길이 변경 -->
				<br/>
			</div>
			<div>
				<div class = "question">6.작품에 대한 소개문서는 적절한가?</div>
				<div class = "score">받은 점수 : {{evalInfo.article6}}</div>
				<div class = "opinion">의견 : {{evalInfo.article6_opinion}}</div> <!-- 내용에따라 길이 변경 -->
				<br/>
			</div>
			<div>
				<div class = "question">7.팀원간의 협력이 잘 이루어졌는가?</div>
				<div class = "score">받은 점수 : {{evalInfo.article7}}</div>
				<div class = "opinion">의견 : {{evalInfo.article7_opinion}}</div> <!-- 내용에따라 길이 변경 -->
				<br/>
			</div>
		</div>
    	
    	<div class = "totscore">
    		<label for="exampleFormControlTextarea1">총 점</label><br>
    		{{totscore}}
    	</div>
    </section>
    <footer>
    	<div class = "button">
	  	  <button type="button" class="btn btn-danger btn-lg" data-ng-click="exit()">돌아가기</button>
	    </div>
    </footer>
  </body>
</html>
	