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

import com.java.root.service.LoginServiceInterface;
import com.java.root.utile.SSOUtile;
import com.java.root.utile.SessionUtile;

@Controller
public class LoginController {

	@Autowired
	SqlSession session;
	
	@Autowired
	LoginServiceInterface lsi;
	
	@RequestMapping(value="/KakaoLogin", method=RequestMethod.GET)
	public void kakaoLogin(HttpServletRequest req, HttpServletResponse resp) {
		SSOUtile.getKakaoToken(req, resp);
	}
	
	@RequestMapping(value="/KakaoBack", method=RequestMethod.GET)
	public String kakaoBack(HttpServletRequest req, HttpSession sess) {
		HashMap<String, Object> paramMap = SSOUtile.getKakaoUser(req);
		System.out.println(paramMap);
		HashMap<String, Object> resultMap = session.selectOne("user.selectSSO", paramMap);
		if(Integer.parseInt(resultMap.get("state").toString()) == 0) {
			session.insert("user.insertUser", paramMap);
		} 
		SessionUtile.setSession(sess, session.selectOne("user.select", paramMap));
		return "redirect:main";
	}
	
	@RequestMapping(value="/NaverLogin", method=RequestMethod.GET)
	public void naverLogin(HttpServletRequest req, HttpServletResponse resp) {
		SSOUtile.getNaverToken(req, resp);
	}
	
	@RequestMapping(value="/NaverBack", method=RequestMethod.GET)
	public String naverBack(HttpServletRequest req, HttpSession session) {
		SessionUtile.setSession(session, SSOUtile.getNaverUser(req));
		return "redirect:main";
	}
	
	@RequestMapping(value="/SessionCheck", method=RequestMethod.GET)
	public void SessionCheck(HttpServletResponse resp, HttpSession session) {
		SessionUtile.getSession(session);
	}
	
	@RequestMapping(value="/Logout", method=RequestMethod.GET)
	public String logout(HttpServletResponse resp, HttpSession session) {
		SessionUtile.delSession(session);
		return "redirect:/login";
	}
}
