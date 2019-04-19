package com.java.root.controller;

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
	
	@RequestMapping(value = "/mypage/professor", method = RequestMethod.GET)
	public String mypage_professor(HttpSession session) {
		if(SessionUtile.checkSession(session)) {
			return "mypage/professor";
		}else {
			return "redirect:/login";
		}
	}
	
	@RequestMapping(value = "/mypage/student", method = RequestMethod.GET)
	public String mypage_student(HttpSession session) {
		if(SessionUtile.checkSession(session)) {
			return "mypage/student";
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
	
	@RequestMapping(value = "/testing/write", method = RequestMethod.GET)
	public String testing_write(HttpSession session) {
		if(SessionUtile.checkSession(session)) {
			return "testing/write";
		}else {
			return "redirect:/login";
		}
	}
	
}
