package com.java.root.controller;

import java.util.HashMap;

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
	
	@RequestMapping(value="/mypage/studentSelect", method=RequestMethod.GET)
	public void studentSelect(HttpSession sess, HttpServletResponse resp){
		if(SessionUtile.checkSession(sess)) {
			HashMap<String, Object> userMap = SessionUtile.getSession(sess);
			HashMap<String, Object> resultMap = session.selectOne("mypage.studentSelect", userMap);
			HttpUtile.printJson(resp, resultMap);
		}else {
			// 예외 처리 넣어라.
		}
	}
	
	@RequestMapping(value="/mypage/renameTeam", method=RequestMethod.POST)
	public void renameTeam(HttpSession sess, HttpServletResponse resp, HttpServletRequest req){
		if(SessionUtile.checkSession(sess)) {
			HashMap<String, Object> paramMap = HttpUtile.getParam(req);
			int state = session.update("mypage.teamNameUpdate", paramMap);
			HashMap<String, Object> resultMap = new HashMap<String, Object>();
			resultMap.put("state", state);
			HttpUtile.printJson(resp, resultMap);
		}else {
			// 예외 처리 넣어라.
		}
	}
}
