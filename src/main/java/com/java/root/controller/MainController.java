package com.java.root.controller;

import java.util.HashMap;
import java.util.List;

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
	
	@RequestMapping(value="/main/postSelectAll", method=RequestMethod.GET)
	public void postSelect(HttpSession sess,HttpServletResponse resp) {
		if(SessionUtile.checkSession(sess)) {
			HashMap<String, Object> userMap = SessionUtile.getSession(sess);
			List<HashMap<String, Object>> resultList = session.selectList("main.postSelectAll", userMap);
			HttpUtile.printJsonList(resp, resultList);
			
		}else {
			
		}
		
	}
	
	
}
