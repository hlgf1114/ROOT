package com.java.root.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class ViewController {
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home() {
		return "redirect:main";
	}
	
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String login() {
		return "login";
	}
	
	@RequestMapping(value = "/main", method = RequestMethod.GET)
	public String main() {
		return "main";
	}
	
	@RequestMapping(value = "mypage/professor", method = RequestMethod.GET)
	public String mypage_professor() {
		return "mypage/professor";
	}
	
	@RequestMapping(value = "mypage/student", method = RequestMethod.GET)
	public String mypage_student() {
		return "mypage/student";
	}
	
	@RequestMapping(value = "/board/detail", method = RequestMethod.GET)
	public String board_detail() {
		return "board/detail";
	}
	
	@RequestMapping(value = "/board/write", method = RequestMethod.GET)
	public String board_write() {
		return "board/write";
	}
	
	@RequestMapping(value = "/testing/write", method = RequestMethod.GET)
	public String testing_write() {
		return "testing/write";
	}
	
}
