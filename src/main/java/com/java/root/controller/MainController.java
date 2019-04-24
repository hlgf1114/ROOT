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

import com.java.root.service.MainServiceInterface;
import com.java.root.utile.HttpUtile;
import com.java.root.utile.SessionUtile;

@Controller
public class MainController {

	/*@Autowired
	MainServiceInterface msi;*/
	
	@Autowired
	SqlSession session;
	
	@RequestMapping(value="/main/postSelect", method=RequestMethod.POST)
	public void postSelect(HttpSession sess, HttpServletRequest req, HttpServletResponse resp) {
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		if(SessionUtile.checkSession(sess)) {			
			HashMap<String, Object> paramMap = HttpUtile.getParam(req);
			HashMap<String, Object> userMap = SessionUtile.getSession(sess);
			paramMap.put("uni_num", userMap.get("uni_num"));
			paramMap.put("authorization", userMap.get("authorization"));
			List<HashMap<String, Object>> resultList = session.selectList("main.postSelect", paramMap);
			List<HashMap<String, Object>> teamList = session.selectList("main.teamSelect", paramMap);
			HashMap<String, Object> totMap = session.selectOne("main.postTotCount", paramMap);
			resultMap.put("state", 1);
			resultMap.put("resultList", resultList);
			resultMap.put("teamList", teamList);
			resultMap.put("totMap", totMap);
		}else {
			resultMap.put("state", 0);
		}
		
		HttpUtile.printJson(resp, resultMap);
	}
	
	
}
