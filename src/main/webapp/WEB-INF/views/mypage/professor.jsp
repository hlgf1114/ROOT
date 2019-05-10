<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<link rel="stylesheet" type="text/css" href="/resources/css/mypage/layout_init.css" />
<link rel="stylesheet" type="text/css" href="/resources/css/mypage/Professor_design.css" />
<script src="/js/angularjs/1.5.11/angular.min.js"></script>
<script src="/resources/js/mypage/script.js"></script>

<script src="/js/jquery/3.3.1/dist/jquery.min.js"></script>
<link rel="stylesheet" href="/resources/lib/bootstrap-4.3.1-dist/css/bootstrap.min.css">
<script src="/resources/lib/bootstrap-4.3.1-dist/js/bootstrap.min.js"></script>
<script src="/resources/lib/bootstrap-4.3.1-dist/js/bootstrap.bundle.min.js"></script>
<title>교수님 마이페이지</title>
</head>

<body data-ng-app="student" data-ng-controller="ProfCtrl">
	<header> 
		<div class="card mb-3 float-left"
			style="min-width: 540px; max-height: 200px;">
			<div class="row no-gutters">
				<div class="col-md-4">
					<img id="profile_img" src="/resources/img/mypage/F3bJH3IX_400x400.jpg"
						class="card-img" alt="프로필 사진">
				</div>
				<div class="col-md-8">
					<div class="card-body">
						<h5 class="card-title">안녕하세요! {{info.name}}교수님!</h5>
					</div>
				</div>
			</div>
		</div>
		<div class="card mb-3 float-right"
			style="height: 200; float: left; width: calc(100% - 540px); text-align: center;">
			<br /> <br />
			<p>-담당 조 목록-</p>
			<br>
		</div>
	</header>
	<!-- 탭 구현 -->
	<div class="main">
		<ul class="nav nav-tabs justify-content-center">
			<li class="nav-item"><a class="nav-link active"
				data-toggle="tab" href="#teamInfo">팀 정보</a></li>
			<li class="nav-item"><a class="nav-link" data-toggle="tab"
				href="#whatupost">내가 쓴 글</a></li>
		</ul>
		<button id="mypagebtn" type="button" class="btn btn-primary"
			data-ng-click="relocated_mainView()">메인 페이지로 돌아가기</button>
		<button id="testPlan" type="button" class="btn btn-info" data-ng-click="">평가 계획서 설정</button>
		<!-- 탭 내용 -->
		<div class="tab-content">
			<div id="teamInfo" class="tab-pane active">
				<table class="table">
				  <thead class="thead-dark">
				    <tr>
				      <th scope="col">팀 이름</th>
				      <th scope="col">평가 점수</th>
				      <th scope="col">합격 여부</th>
				    </tr>
				  </thead>
				  <tbody>
				    <tr data-ng-repeat="team in teamList">
				      <th scope="row">{{team.team_name}}</th>
				      <td>{{team.team_score}}</td>
				      <td>{{team.yesNo}}</td>
				    </tr>
				  </tbody>
				</table>
			</div>
			<div id="whatupost" class="tab-pane">
				<h1>dsd</h1>
				<p>ssds</p>
			</div>
		</div>
		<footer>
			<div id='logo_image_wrapper'>
				<img id='logo_image' src="/resources/img/mypage/img_logo_footer.png"
					alt="남서울대학교 푸터 로고" />
				<div id="footer_info">남서울대학교입니다. made by KSB</div>
			</div>
		</footer>
</body>

</html>
