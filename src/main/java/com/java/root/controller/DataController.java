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

import com.java.root.service.DataServiceInterface;

@Controller
public class DataController {
	
	@Autowired
	SqlSession session;

	@RequestMapping(value="testDB", method=RequestMethod.GET)
	public void testDB() {
		List<HashMap<String, Object>> list = session.selectList("test.testDB");
		for(int i = 0; i < list.size(); i++) {
			System.out.println(list.get(i).toString());
		}
	}
	
	@Autowired
	DataServiceInterface dsi;
	
	@RequestMapping(value="user/select", method=RequestMethod.GET)
	public void user_select(HttpServletRequest req, HttpServletResponse resp, HttpSession session) {
		dsi.selectList(req, resp, session);
	}
	
}
