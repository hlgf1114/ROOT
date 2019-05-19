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

import com.java.root.service.TestingServiceInterface;
import com.java.root.utile.HttpUtile;
import com.java.root.utile.SessionUtile;

@Controller
public class TestingController {

	@Autowired
	TestingServiceInterface tsi;
	
	@Autowired
	SqlSession session;
	
	/************************
	 *evaluate.jsp functions*
	 ************************/
	
	@RequestMapping(value = "/testing/sendEval", method = RequestMethod.POST)
	public void sendEval (HttpSession sess, HttpServletResponse resp, HttpServletRequest req) {
		if (SessionUtile.checkSession(sess)) {
			HashMap<String, Object> paramMap = HttpUtile.getParam(req);
			int state = session.insert("testing.sendEval", paramMap);
			HashMap<String, Object> resultMap = new HashMap<String, Object>();
			resultMap.put("state", state);
			HttpUtile.printJson(resp, resultMap);
		} else {
			// 예외 처리 넣어라.
		}
	}
	
	@RequestMapping(value = "/testing/selectTeamAll", method = RequestMethod.POST)
	public void selectTeamAll(HttpServletResponse resp) {
		List<HashMap<String, Object>> resultList = session.selectList("testing.selectTeamAll");
		System.out.println(resultList);
		HttpUtile.printJsonList(resp, resultList);
	}
	
	@RequestMapping(value = "/testing/selectProfAll", method = RequestMethod.POST)
	public void selectProfAll(HttpServletResponse resp) {
		List<HashMap<String, Object>> resultList = session.selectList("testing.selectProfAll");
		System.out.println(resultList);
		HttpUtile.printJsonList(resp, resultList);
	}
	
	@RequestMapping(value = "/testing/getTeamInfo", method = RequestMethod.POST)
	public void getTeamInfo(HttpServletResponse resp, HttpServletRequest req) {
		HashMap<String, Object> paramMap = HttpUtile.getParam(req);
		List<HashMap<String, Object>> resultMapList = session.selectList("testing.getTeamInfo", paramMap);
		System.out.println(resultMapList);
		HttpUtile.printJsonList(resp, resultMapList);
	}
	
	/************************
	 *finaleval.jsp functions*
	 ************************/
	@RequestMapping(value = "/testing/getTeamEval", method = RequestMethod.POST)
	public void getTeamEval(HttpServletResponse resp, HttpServletRequest req) {
		HashMap<String, Object> paramMap = HttpUtile.getParam(req);
		List<HashMap<String, Object>> resultMapList = session.selectList("testing.getTeamEval", paramMap);
		System.out.println(resultMapList);
		HttpUtile.printJsonList(resp, resultMapList);
	}
	
	@RequestMapping(value = "/testing/getEvalList", method = RequestMethod.POST)
	public void getEvalScore(HttpServletResponse resp, HttpServletRequest req) {
		HashMap<String, Object> paramMap = HttpUtile.getParam(req);
		List<HashMap<String, Object>> resultMapList = session.selectList("testing.getEvalList", paramMap);
		System.out.println(resultMapList);
		HttpUtile.printJsonList(resp, resultMapList);
	}
	
	@RequestMapping(value = "/testing/sendFinalEval", method = RequestMethod.POST)
	public void sendFinalEval(HttpServletResponse resp, HttpServletRequest req) {
		HashMap<String, Object> paramMap = HttpUtile.getParam(req);
		int state = session.update("testing.sendFinalEval", paramMap);
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("state", state);
		HttpUtile.printJson(resp, resultMap);
	}
	
	/************************
	 *evalread.jsp functions*
	 ************************/
	@RequestMapping(value = "/testing/getEvalInfo", method = RequestMethod.POST)
	public void getEvalInfo(HttpServletResponse resp, HttpServletRequest req) {
		HashMap<String, Object> paramMap = HttpUtile.getParam(req);
		HashMap<String, Object> resultMap = session.selectOne("testing.getEvalInfo", paramMap);
		System.out.println(resultMap);
		HttpUtile.printJson(resp, resultMap);
	}
	
	@RequestMapping(value = "/testing/getChargeProf", method = RequestMethod.POST)
	public void getChargeProf(HttpServletResponse resp, HttpServletRequest req) {
		HashMap<String, Object> paramMap = HttpUtile.getParam(req);
		HashMap<String, Object> resultMap = session.selectOne("testing.getChargeProf", paramMap);
		System.out.println(resultMap);
		HttpUtile.printJson(resp, resultMap);
	}
	
	/***************************
	 *evalsetting.jsp functions*
	 ***************************/
	@RequestMapping(value = "/testing/setEvalSetting", method = RequestMethod.POST)
	public void setEvalSetting(HttpServletResponse resp, HttpServletRequest req) {
		HashMap<String, Object> paramMap = HttpUtile.getParam(req);
		int state = session.update("testing.setEvalSetting", paramMap);
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("state", state);
		System.out.println(resultMap);
		HttpUtile.printJson(resp, resultMap);
	}
	
	@RequestMapping(value = "/testing/setEvalProf", method = RequestMethod.POST)
	public void setEvalProf(HttpServletResponse resp, HttpServletRequest req) {
		HashMap<String, Object> paramMap = HttpUtile.getParam(req);
		int state = session.insert("testing.setEvalProf", paramMap);
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		resultMap.put("state", state);
		System.out.println(resultMap);
		HttpUtile.printJson(resp, resultMap);
	}
	
	@RequestMapping(value = "/testing/existProf", method = RequestMethod.POST)
	public void existProf(HttpServletResponse resp, HttpServletRequest req) {
		HashMap<String, Object> paramMap = HttpUtile.getParam(req);
		List<HashMap<String, Object>> resultMapList = session.selectList("testing.existProf", paramMap);
		System.out.println(resultMapList);
		HttpUtile.printJsonList(resp, resultMapList);
	}
	
	/**************************
	 *evalselect.jsp functions*
	 **************************/
	@RequestMapping(value = "/testing/getEvalTeamList", method = RequestMethod.POST)
	public void getEvalTeamList(HttpServletResponse resp, HttpServletRequest req) {
		List<HashMap<String, Object>> resultMapList = session.selectList("testing.getEvalTeamList");
		System.out.println(resultMapList);
		HttpUtile.printJsonList(resp, resultMapList);
	}
	
	@RequestMapping(value = "/testing/checkEval", method = RequestMethod.POST)
	public void checkEval(HttpServletResponse resp, HttpServletRequest req) {
		HashMap<String, Object> paramMap = HttpUtile.getParam(req);
		HashMap<String, Object> resultMap = session.selectOne("testing.checkEval", paramMap);
		System.out.println(resultMap);
		HttpUtile.printJson(resp, resultMap);
	}
	
	
}
