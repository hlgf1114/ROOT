<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">
<link rel="stylesheet" type="text/css"
	href="/resources/css/mypage/layout_init.css" />
<link rel="stylesheet" type="text/css"
	href="/resources/css/mypage/mypage_design.css" />
<script src="/js/angularjs/1.5.11/angular.min.js"></script>
<script src="/resources/js/mypage/script.js"></script>

<script src="/js/jquery/3.3.1/dist/jquery.min.js"></script>
<link rel="stylesheet"
	href="/resources/lib/bootstrap-4.3.1-dist/css/bootstrap.min.css">
<script src="/resources/lib/bootstrap-4.3.1-dist/js/bootstrap.min.js"></script>
<script
	src="/resources/lib/bootstrap-4.3.1-dist/js/bootstrap.bundle.min.js"></script>
<title>마이페이지</title>
</head>

<body data-ng-app="student" data-ng-controller="StdCtrl">
	<header>
		<div class="card mb-3 float-left"
			style="min-width: 540px; max-height: 200px;">
			<div class="row no-gutters">
				<div class="col-md-4">
					<img id="profile_img"
						src="/resources/img/mypage/F3bJH3IX_400x400.jpg" class="card-img"
						alt="프로필 사진">
				</div>
				<div class="col-md-8">
					<div class="card-body">
						<h5 class="card-title">안녕하세요! {{info.name}}님!</h5>
						<p class="card-text">전공학과: {{info.dept}}</p>
						<!-- 						<p class="card-text"> -->
						<!-- 							<small class="text-muted">{{loginDate}}</small> -->
						<!-- 						</p> -->
					</div>
				</div>
			</div>
		</div>
		<div class="card mb-3 float-right"
			style="height: 200px; float: left; width: calc(100% - 540px); text-align: center;">
			<br /> <br />
			<p>-자신이 해당하는 조-</p>
			<br>
			<p>{{info.team_name}}</p>
		</div>
	</header>
	<!-- 탭 구현 -->
	<div class="main">
		<ul class="nav nav-tabs justify-content-center">
			<li class="nav-item"><a class="nav-link active"
				data-toggle="tab" href="#privateInfo">개인정보</a></li>
			<li class="nav-item"><a class="nav-link" data-toggle="tab"
				href="#whatupost">내가 쓴 글</a></li>
			<li class="nav-item" ng-hide="disableTab()"><a class="nav-link" data-toggle="tab"
				href="#set-team">팀 관리</a></li>
		</ul>
		<button id="mypagebtn" type="button" class="btn btn-primary"
			data-ng-click="relocated_mainView()">메인 페이지로 돌아가기</button>
		<!-- 탭 내용 -->
		<div class="tab-content">
			<!-- 개인정보 표시 및 수정 -->
			<div id="privateInfo" class="tab-pane active">
				<h1>개인 정보</h1>
				<br> <br> <br>
				<div class="private-window">
					<div id="priv-name">
						<h3>이름</h3>
						<input class="form-control" type="text" placeholder={{info.name}}
							readonly>
					</div>
					<div id="priv-team">
						<h3>나의 팀</h3>
						<input class="form-control" type="text"
							placeholder={{info.team_name}} readonly>
					</div>
					<div id="priv-score">
						<h3>나의 성적</h3>
						<table class="table">
							<thead class="thead-dark">
								<tr>
									<th scope="col">중간 발표 점수</th>
									<th scope="col">최종 발표 점수</th>
									<th scope="col">팀 내 개인 점수</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">{{userScore.score_mid}}</th>
									<td>{{userScore.score_fin}}</td>
									<td>{{userScore.score_team}}</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<!-- 내 포스트 탭 -->
			<div id="whatupost" class="tab-pane">
				<div class="private-window">
					<table class="table">
						<thead class="thead-dark">
							<tr>
								<th scope="col">게시판 번호</th>
								<th scope="col">제목</th>
								<th scope="col">업로드 날짜</th>
							</tr>
						</thead>
						<tbody>
							<tr ng-repeat="mypost in myPostList" data-ng-click="myPostSelect(mypost)">
								<th scope="row">{{mypost.post_num}}</th>
								<td>{{mypost.post_name}}</td>
								<td>{{mypost.postDate}}</td>
							</tr>
						</tbody>
					</table>
				</div>
				<br />
				<nav aria-label="...">
					<ul class="pagination justify-content-center">
						<li class="page-item disabled"><a class="page-link" href="#"
							tabindex="-1" aria-disabled="true">Previous</a></li>
						<li class="page-item"><a class="page-link" href="#">1</a></li>
						<li class="page-item active" aria-current="page"><a
							class="page-link" href="#">2 <span class="sr-only">(current)</span></a>
						</li>
						<li class="page-item"><a class="page-link" href="#">3</a></li>
						<li class="page-item"><a class="page-link" href="#">Next</a>
						</li>
					</ul>
				</nav>
			</div>
			<!-- 내 팀 관린 -->
			<div id="set-team" class="tab-pane">
				<div class="private-window">
					<div class="form-group">
						<div class="input-group input-group-lg">
							<div class="input-group-prepend">
								<span class="input-group-text" id="inputGroup-sizing-lg">팀
									이름</span>
							</div>
							<input type="text" class="form-control"
								aria-label="Sizing example input"
								aria-describedby="inputGroup-sizing-lg"
								data-ng-model="info.team_name">
							<button type="button" class="btn btn-warning"
								data-ng-click="te()">변경</button>
						</div>
					</div>
					<div>
						<h3>팀원 리스트</h3>
						<table class="table">
							<thead class="thead-dark">
								<tr>
									<th scope="col">고유 번호</th>
									<th scope="col">이름</th>
									<th scope="col">팀원 삭제 </th>
								</tr>
							</thead>
							<tbody>
								<tr ng-repeat="members in teamMembers">
									<th scope="row">{{members.uni_num}}</th>
									<td>{{members.name}}</td>
									<td><button type="button" class="btn btn-danger" data-ng-click="deleteTeamStudent(members)">삭제</button></td>
								</tr>
							</tbody>
						</table>
					</div>
					<div>
						<div class="private-window">
							<h3>팀원 등록</h3>
							<table class="table">
								<thead class="thead-dark">
									<tr>
										<th scope="col">고유 번호</th>
										<th scope="col">이름</th>
										<th scope="col">팀원 여부</th>
										<div class="form-group mx-sm-3 mb-2">
											<label for="inputPassword2" class="sr-only"></label> <input
												type="text" class="form-control" id="inputPassword2"
												placeholder="이름 검색" data-ng-model="nameValue.name">
										</div>
										<button type="submit" class="btn btn-primary mb-2"
											data-ng-click="getStdSearch()">검색</button>
									</tr>
								</thead>
								<tbody>
									<tr ng-repeat="list in stdList">
										<th scope="row">{{list.uni_num}}</th>
										<td>{{list.name}}</td>
										<td><button type="button" class="btn btn-primary" data-ng-click="chooseTeamStudent(list)">적용</button></td>
									</tr>
								</tbody>
							</table>
							<button type="button" class="btn btn-primary" data-ng-click="chooseTeamStudent()">적용</button>
							<br /> <br />
						</div>
					</div>
				</div>
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