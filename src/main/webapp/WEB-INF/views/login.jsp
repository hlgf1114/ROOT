<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<html>
    <head>
        <meta charset="UTF-8">
        <title>학생 로그인</title>
        <style>
            html, body {
                margin: 0 auto;
                overflow: hidden;
                text-align: center;
                background-image: url('/resources/img/login/img_bg.png')
            }
            header {
            }

            #login_block {
                width:500px;
                height: 500px;
                border-radius:50px;
                background-color: white;
            }

            #wrapper {
                position: absolute;
                left: calc(50% - 250px);
                top: calc(50% - 250px);
            }

            footer {
                background-color:
                margin: 00px 300px 00px;
            }

            #naver{
                position: relative;
                margin-top: 50px;
                width: 250px;
                height: 50px;
            }
            #kakao{
                position: relative;
                margin-top: 30px;
                border-radius:10px;
                width: 250px;
                height: 50px;
            }
            #nsu{
              margin: 00px 100px 00px;
              width: 300px;
              height: 200px;
            }
            img {cursor: pointer;}
        </style>
    </head>
    <body>
        <header>
        </header>
        <div id='wrapper'>
            <section id='login_block'>
            <br>
            <img src = "/resources/img/login/nsu1.jpg" id = "nsu">
            <br>
                남서울 대학교 학생 로그인
<!--                 <div id = "naverIdLogin"> -->
<!-- 	                <a href="/NaverLogin"> -->
<!-- 	                	<img src = "/resources/img/login/네이버 아이디로 로그인_완성형_Green.PNG" id = "naver"> -->
<!-- 	                </a> -->
<!--                 </div> -->
                <div>
	                <a href="/KakaoLogin">
	                	<img src = "/resources/img/login/kakao_account_login_btn_large_narrow.png" id = "kakao">
	                </a>
                </div>
            </section>
        </div>
        <footer>

        </footer>
      
    </body>
</html>
