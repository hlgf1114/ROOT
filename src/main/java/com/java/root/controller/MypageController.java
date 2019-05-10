package com.java.root.controller;

import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.java.root.service.MypageServiceInterface;
import com.java.root.utile.HttpUtile;
import com.java.root.utile.SessionUtile;

@Controller
public class MypageController {

//	@Autowired
//	MypageServiceInterface mysi;

	@Autowired
	SqlSession session;
	
	/********************
	 * common 기능               *
	 * ******************/
	@RequestMapping(value= "/mypage/postTotCount", method = RequestMethod.GET)
	public void postTotCount(HttpSession sess, HttpServletRequest req, HttpServletResponse resp) {
		if (SessionUtile.checkSession(sess)) {
			HashMap<String, Object> userMap = SessionUtile.getSession(sess);
			HashMap<String, Object> totMap = session.selectOne("main.postTotCount", userMap);
			HttpUtile.printJson(resp, totMap);
		} else {
			// 예외 처리 넣어라.
		}
	}
	
	
	/******************
	 * student.jsp 기능 *
	 * ****************/
	@RequestMapping(value = "/mypage/studentSelect", method = RequestMethod.GET)
	public void studentSelect(HttpSession sess, HttpServletResponse resp) {
		if (SessionUtile.checkSession(sess)) {
			HashMap<String, Object> userMap = SessionUtile.getSession(sess);
			HashMap<String, Object> resultMap = session.selectOne("mypage.studentSelect", userMap);
			HttpUtile.printJson(resp, resultMap);
		} else {
			// 예외 처리 넣어라.
		}
	}

	@RequestMapping(value = "/mypage/renameTeam", method = RequestMethod.POST)
	public void renameTeam(HttpSession sess, HttpServletResponse resp, HttpServletRequest req) {
		if (SessionUtile.checkSession(sess)) {
			HashMap<String, Object> paramMap = HttpUtile.getParam(req);
			int state = session.update("mypage.teamNameUpdate", paramMap);
			HashMap<String, Object> resultMap = new HashMap<String, Object>();
			resultMap.put("state", state);
			HttpUtile.printJson(resp, resultMap);
		} else {
			// 예외 처리 넣어라.
		}
	}

	@RequestMapping(value = "/mypage/studentSelectAll", method = RequestMethod.GET)
	public void stdSelect(HttpSession sess, HttpServletResponse resp) {
		if (SessionUtile.checkSession(sess)) {
			HashMap<String, Object> userMap = SessionUtile.getSession(sess);
//			HashMap<String, Object> resultMap = session.selectOne("mypage.studentSelectAll", userMap);
			List<HashMap<String, Object>> resultList = session.selectList("mypage.studentSelectAll", userMap);
			HttpUtile.printJsonList(resp, resultList);
//			for(int i = 0; i <resultList.size(); i++) {
//				HashMap<String, Object> separate = resultList.get(i);
//				System.out.println(separate + " mypagecontroller");
//				HttpUtile.printJson(resp, separate);
//			}
//			HttpUtile.printJsonList(resp, resultList);
		} else {
			// 예외 처리 넣어라.
		}
	}

	@RequestMapping(value = "/mypage/studentSearch", method = RequestMethod.GET)
	public void stdSearch(HttpSession sess, HttpServletRequest req, HttpServletResponse resp) {
		HashMap<String, Object> paramMap = HttpUtile.getParam(req);
		List<HashMap<String, Object>> getListMap = session.selectList("mypage.studentSearch", paramMap);
		System.out.println(getListMap);
		HttpUtile.printJsonList(resp, getListMap);

	}

	@RequestMapping(value = "/mypage/teamStudent", method = RequestMethod.GET)
	public void teamStudent(HttpSession sess, HttpServletRequest req, HttpServletResponse resp) {
		if (SessionUtile.checkSession(sess)) {
			HashMap<String, Object> userMap = SessionUtile.getSession(sess);
			List<HashMap<String, Object>> resultMap = session.selectList("mypage.teamSelect", userMap);
			System.out.println(resultMap);
			HttpUtile.printJsonList(resp, resultMap);
		} else {

		}
	}

	@RequestMapping(value = "/mypage/stdScore", method = RequestMethod.GET)
	public void stdScore(HttpSession sess, HttpServletRequest req, HttpServletResponse resp) {
		if (SessionUtile.checkSession(sess)) {
			HashMap<String, Object> userMap = SessionUtile.getSession(sess);
			HashMap<String, Object> resultMap = session.selectOne("mypage.studentScoreSelect", userMap);
			System.out.println(resultMap);
			HttpUtile.printJson(resp, resultMap);
		} else {

		}
	}
	
	@RequestMapping(value = "/mypage/myPostSelect", method = RequestMethod.GET)
	public void myPostSelect(HttpSession sess, HttpServletRequest req, HttpServletResponse resp) {
		if (SessionUtile.checkSession(sess)) {
			HashMap<String, Object> userMap = SessionUtile.getSession(sess);
			HashMap<String, Object> paramMap = HttpUtile.getParam(req);
			userMap.put("index", paramMap.get("index"));
			System.out.println(userMap);
			List<HashMap<String, Object>> resultMapList = session.selectList("mypage.myPostSelect", userMap);
			System.out.println(resultMapList);
			HttpUtile.printJsonList(resp, resultMapList);
		} else {

		}
	}
	
	@RequestMapping(value = "/mypage/chooseTeamStudent", method = RequestMethod.GET)
	public void chooseTeamStudent(HttpSession sess, HttpServletRequest req, HttpServletResponse resp) {
		if (SessionUtile.checkSession(sess)) {
			HashMap<String, Object> paramMap = HttpUtile.getParam(req);
			int state = session.update("mypage.chooseTeamStudent", paramMap);
			HashMap<String, Object> resultMap = new HashMap<String, Object>();
			resultMap.put("state", state);
			HttpUtile.printJson(resp, resultMap);
		}else {
			
		}
	}
	
	@RequestMapping(value = "/mypage/deleteTeamStudent", method = RequestMethod.GET)
	public void deleteTeamStudent(HttpSession sess, HttpServletRequest req, HttpServletResponse resp) {
		if (SessionUtile.checkSession(sess)) {
			HashMap<String, Object> paramMap = HttpUtile.getParam(req);
			int state = session.update("mypage.deleteTeamStudent", paramMap);
			HashMap<String, Object> resultMap = new HashMap<String, Object>();
			resultMap.put("state", state);
			HttpUtile.printJson(resp, resultMap);
		}else {
			
		}
	}
	
	/********************
	 * professor.jsp 기능 *
	 * ******************/
//	@RequestMapping(value="/mypage/profSelect", method=RequestMethod.GET)
//	public void profSelect(HttpSession sess, HttpServletRequest req, HttpServletResponse resp) {
//		HashMap<String, Object> userMap = SessionUtile.getSession(sess);
//		HashMap<String, Object> resultMap = session.selectOne("mypage.profSelect", userMap);
//		System.out.println(resultMap);
//		HttpUtile.printJson(resp, resultMap);
//	}
	
	@RequestMapping(value ="/mypage/profTeamSelect", method=RequestMethod.GET)
	public void profTeamSelect(HttpSession sess, HttpServletRequest req, HttpServletResponse resp) {
		HashMap<String, Object> paramMap = HttpUtile.getParam(req);
		List<HashMap<String, Object>> getProfTeams = session.selectList("mypage.profTeamSelect", paramMap);
		System.out.println(getProfTeams);
		HttpUtile.printJsonList(resp, getProfTeams);
	}

}
