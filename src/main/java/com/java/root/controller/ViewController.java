package com.java.root.controller;

import java.util.HashMap;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.java.root.utile.SessionUtile;

@Controller
public class ViewController {
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home() {
		return "redirect:/main";
//		return "redirect:user/select?sso=0000";
	}
	
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String login() {
		return "login";
	}
	
	@RequestMapping(value = "/main", method = RequestMethod.GET)
	public String main(HttpSession session) {
		if(SessionUtile.checkSession(session)) {
			return "main";
		}else {
			return "redirect:/login";
		}		
	}
	
	@RequestMapping(value = "/mypage", method = RequestMethod.GET)
	public String mypage_professor(HttpSession session) {
		if(SessionUtile.checkSession(session)) {
			HashMap<String, Object> userMap = SessionUtile.getSession(session);
			int authorization = (int) userMap.get("authorization");
			
			if(authorization == 0 || authorization == 1) {
				return "mypage/student";
			}else if(authorization == 2) {
				return "mypage/professor";
			}else {
				return "redirect:/login";
			}
		}else {
			return "redirect:/login";
		}
	}
	
	@RequestMapping(value = "/board/detail", method = RequestMethod.GET)
	public String board_detail(HttpSession session) {
		if(SessionUtile.checkSession(session)) {
			return "board/detail";
		}else {
			return "redirect:/login";
		}
	}
	
	@RequestMapping(value = "/board/write", method = RequestMethod.GET)
	public String board_write(HttpSession session) {
		if(SessionUtile.checkSession(session)) {
			return "board/write";
		}else {
			return "redirect:/login";
		}
	}
	
	@RequestMapping(value = "/testing/evaluate", method = RequestMethod.GET)
	public String testing_write(HttpSession session) {
		if(SessionUtile.checkSession(session)) {
			return "testing/evaluate";
		}else {
			return "redirect:/login";
		}
	}
	
}
