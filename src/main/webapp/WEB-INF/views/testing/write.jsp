<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head> 
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  
  <script src="/js/angularjs/1.5.11/angular.min.js"></script>
  <link rel="stylesheet" href="/js/bootstrap/3.4.1/css/bootstrap.min.css">
  
  <script src="/resources/js/testing/admin04_08.js"></script>
  <link rel="stylesheet" type="text/css" href="/resources/css/testing/admin04_08.css" />
  <title>Document</title>
</head>
<body>
  <header>
    asdf
  </header>

<section data-ng-app="add" data-ng-controller="liCtrl">
  <article>
    <form>
      <button class="btn btn" data-ng-click="fstbtn()">객관형</button>
      <button class="btn btn" data-ng-click="sndbtn()">장문형</button>
      <button class="btn btn" data-ng-click="thdbtn()">만족도</button>
    <div data-ng-repeat="fst in choices" >
    <textarea cols="85%" rows="1%">제목없는 질문</textarea>
    <button class="btn btn" data-ng-click="removebtn(choice.id)" data-ng-if="choice.id!=index">삭제</button>
    <br>
    <br>
             <input type="radio" style="width:15px;height:15px;" name="num1" value="1" >
             <textarea id="in" name="check" form="inform"style="width:20%" rows="1%">1</textarea><br>
             <input type="radio" style="width:15px;height:15px;" name="num1" value="2" required>
             <textarea id="in" name="check" form="inform"style="width:20%" rows="1%">2</textarea><br>
             <input type="radio" style="width:15px;height:15px;" name="num1" value="3" required>
             <textarea id="in" name="check" form="inform"style="width:20%" rows="1%">3</textarea><br>
             <input type="radio" style="width:15px;height:15px;" name="num1" value="4" required>
             <textarea id="in" name="check" form="inform"style="width:20%" rows="1%">4</textarea><br>
  </div>

<div data-ng-repeat = "snd in tchoices">
  <textarea cols="85%" rows="1%">장문형</textarea>
<button class="btn btn" data-ng-click="tremovebtn(tchoice.id)" data-ng-if="tchoice.id!=index">삭제</button>
<br>
      <textarea style="width:65%" rows="1%" placeholder="신중한 평가를 부탁 드립니다."></textarea>
      <br>
</div>

<div data-ng-repeat = "thd in thchoices">
  <textarea cols="85%" rows="1%">구성</textarea>
  <button class="btn btn" data-ng-click="thremovebtn(thchoice.id)" data-ng-if="thchoice.id!=index">삭제</button>
<br>
	  	나쁨
      <input type="radio" style="width:15px;height:15px;" name="num1" value="1" >
      <input type="radio" style="width:15px;height:15px;" name="num1" value="2" >
      <input type="radio" style="width:15px;height:15px;" name="num1" value="3" >
      <input type="radio" style="width:15px;height:15px;" name="num1" value="4" >
      	좋음

</div>
</form>

  </article>
</section>
</body>
</html>