package com.java.root.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

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
	LoginServiceInterface lsi;
	
	@RequestMapping(value="/KakaoLogin", method=RequestMethod.GET)
	public void kakaoLogin(HttpServletRequest req, HttpServletResponse resp) {
		SSOUtile.getKakaoToken(req, resp);
	}
	
	@RequestMapping(value="/KakaoBack", method=RequestMethod.GET)
	public String kakaoBack(HttpServletRequest req, HttpSession session) {
		SessionUtile.setSession(session, SSOUtile.getKakaoUser(req));
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
	
}
