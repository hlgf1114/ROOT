<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
<meta charset="utf-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<!-- css 불러오기 -->
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
<link rel="stylesheet" type="text/css"
	href="/resources/css/testing/evaluate.css" />
<!-- 자바스크립트 불러오기 -->
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
<script src="/js/angularjs/1.5.11/angular.min.js"></script>
<script src="/resources/js/testing/evaluate.js"></script>
</head>

<body data-ng-app="scoreEval" data-ng-controller="ScoreCtrl">
	<br />
	<p id="form_name">졸업 작품 심사서</p>
	<div id="selectedTeam">
		<div id="teamName">
			<h3>조 이름</h3>
			<p>캡틴 아메리카</p>
		</div>
		<div id="teamColleague">
			<h3>팀원</h3>
			<p>팀원, 팀원, 팀원, 팀원</p>
		</div>
	</div>
	<div id="main_check">
		<form class="questionBox">
			<p>1.작품의 내용과 제목이 적절하게 부합되었는가?</p>
			<li class="btn btn-sm btn-primary"><input type="radio"
				data-ng-model="article.article1" value="10">아주 우수</li>
			<li class="btn btn-sm btn-primary"><input type="radio"
				data-ng-model="article.article1" value="8">우수</li>
			<li class="btn btn-sm btn-primary"><input type="radio"
				data-ng-model="article.article1" value="6">보통</li>
			<li class="btn btn-sm btn-primary"><input type="radio"
				data-ng-model="article.article1" value="4">불량</li>
			<li class="btn btn-sm btn-primary"><input type="radio"
				data-ng-model="article.article1" value="2">매우 불량</li>
			<div class="form-group">
				<label for="exampleFormControlTextarea1">의견 작성</label>
				<textarea class="form-control"
					data-ng-model="article_opi.article_opinion1"
					id="exampleFormControlTextarea1" rows="3">
				</textarea>
			</div>
		</form>
		<form class="questionBox">
			<p>2.작품의 내용이 독창적인가?</p>
			<li class="btn btn-sm btn-primary"><input type="radio"
				data-ng-model="article.article2" value="10">아주 우수</li>
			<li class="btn btn-sm btn-primary"><input type="radio"
				data-ng-model="article.article2" value="8">우수</li>
			<li class="btn btn-sm btn-primary"><input type="radio"
				data-ng-model="article.article2" value="6">보통</li>
			<li class="btn btn-sm btn-primary"><input type="radio"
				data-ng-model="article.article2" value="4">불량</li>
			<li class="btn btn-sm btn-primary"><input type="radio"
				data-ng-model="article.article2" value="2">매우 불량</li>
			<div class="form-group">
				<label for="exampleFormControlTextarea1">의견 작성</label>
				<textarea class="form-control"
					data-ng-model="article_opi.article_opinion2"
					id="exampleFormControlTextarea1" rows="3">
				</textarea>
			</div>
		</form>
		<form class="questionBox">
			<p>3.작품의 구성은 적절한가(목표설정, 요구분석, 설계, 구현 등)?</p>
			<li class="btn btn-sm btn-primary"><input type="radio"
				data-ng-model="article.article3" value="10">아주 우수</li>
			<li class="btn btn-sm btn-primary"><input type="radio"
				data-ng-model="article.article3" value="8">우수</li>
			<li class="btn btn-sm btn-primary"><input type="radio"
				data-ng-model="article.article3" value="6">보통</li>
			<li class="btn btn-sm btn-primary"><input type="radio"
				data-ng-model="article.article3" value="4">불량</li>
			<li class="btn btn-sm btn-primary"><input type="radio"
				data-ng-model="article.article3" value="2">매우 불량</li>
			<div class="form-group">
				<label for="exampleFormControlTextarea1">의견 작성</label>
				<textarea class="form-control"
					data-ng-model="article_opi.article_opinion3"
					id="exampleFormControlTextarea1" rows="3">
				</textarea>
			</div>
		</form>
		<form class="questionBox">
			<p>4.작품의 완성도는?</p>
			<li class="btn btn-sm btn-primary"><input type="radio"
				data-ng-model="article.article4" value="10">아주 우수</li>
			<li class="btn btn-sm btn-primary"><input type="radio"
				data-ng-model="article.article4" value="8">우수</li>
			<li class="btn btn-sm btn-primary"><input type="radio"
				data-ng-model="article.article4" value="6">보통</li>
			<li class="btn btn-sm btn-primary"><input type="radio"
				data-ng-model="article.article4" value="4">불량</li>
			<li class="btn btn-sm btn-primary"><input type="radio"
				data-ng-model="article.article4" value="2">매우 불량</li>
			<div class="form-group">
				<label for="exampleFormControlTextarea1">의견 작성</label>
				<textarea class="form-control"
					data-ng-model="article_opi.article_opinion4"
					id="exampleFormControlTextarea1" rows="3">
				</textarea>
			</div>
		</form>
		<form class="questionBox">
			<p>5.작품에 대한 문서유지와 논문 구성은 적절한가?</p>
			<li class="btn btn-sm btn-primary"><input type="radio"
				data-ng-model="article.article5" value="10">아주 우수</li>
			<li class="btn btn-sm btn-primary"><input type="radio"
				data-ng-model="article.article5" value="8">우수</li>
			<li class="btn btn-sm btn-primary"><input type="radio"
				data-ng-model="article.article5" value="6">보통</li>
			<li class="btn btn-sm btn-primary"><input type="radio"
				data-ng-model="article.article5" value="4">불량</li>
			<li class="btn btn-sm btn-primary"><input type="radio"
				data-ng-model="article.article5" value="2">매우 불량</li>
			<div class="form-group">
				<label for="exampleFormControlTextarea1">의견 작성</label>
				<textarea class="form-control"
					data-ng-model="article_opi.article_opinion5"
					id="exampleFormControlTextarea1" rows="3">
				</textarea>
			</div>
		</form>
		<form class="questionBox">
			<p>6.작품에 대한 소개문서는 적절한가?</p>
			<li class="btn btn-sm btn-primary"><input type="radio"
				data-ng-model="article.article6" value="10">아주 우수</li>
			<li class="btn btn-sm btn-primary"><input type="radio"
				data-ng-model="article.article6" value="8">우수</li>
			<li class="btn btn-sm btn-primary"><input type="radio"
				data-ng-model="article.article6" value="6">보통</li>
			<li class="btn btn-sm btn-primary"><input type="radio"
				data-ng-model="article.article6" value="4">불량</li>
			<li class="btn btn-sm btn-primary"><input type="radio"
				data-ng-model="article.article6" value="2">매우 불량</li>
			<div class="form-group">
				<label for="exampleFormControlTextarea1">의견 작성</label>
				<textarea class="form-control"
					data-ng-model="article_opi.article_opinion6"
					id="exampleFormControlTextarea1" rows="3">
				</textarea>
			</div>
		</form>
		<form class="questionBox">
			<p>7.팀원간의 협력이 잘 이루어졌는가?</p>
			<li class="btn btn-sm btn-primary"><input type="radio"
				data-ng-model="article.article7" value="10">아주 우수</li>
			<li class="btn btn-sm btn-primary"><input type="radio"
				data-ng-model="article.article7" value="8">우수</li>
			<li class="btn btn-sm btn-primary"><input type="radio"
				data-ng-model="article.article7" value="6">보통</li>
			<li class="btn btn-sm btn-primary"><input type="radio"
				data-ng-model="article.article7" value="4">불량</li>
			<li class="btn btn-sm btn-primary"><input type="radio"
				data-ng-model="article.article7" value="2">매우 불량</li>
			<div class="form-group">
				<label for="exampleFormControlTextarea1">의견 작성</label>
				<textarea class="form-control"
					data-ng-model="article_opi.article_opinion7"
					id="exampleFormControlTextarea1" rows="3">
				</textarea>
			</div>
		</form>
		<div id="scoreEvalBox">
			<h4>합격: 54점 이상, 재심사: 45점 이상, 불합격: 45점 미만</h4>
			<h2>평가 점수 : {{getTotal()}}</h2>
			<br /> <br />
			<button class="btn btn-sm btn-success" data-ng-click="sendResult()">완료</button>
			<button class="btn btn-sm btn-danger">다시 하기</button>
			<br /> <br />
		</div>
	</div>
</body>

</html>
