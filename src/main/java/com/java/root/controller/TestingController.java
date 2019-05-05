package com.java.root.controller;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.java.root.service.TestingServiceInterface;

@Controller
public class TestingController {

	@Autowired
	TestingServiceInterface tsi;
	
	@Autowired
	SqlSession session;
	
	/************************
	 *evaluate.jsp functions*
	 ************************/
	
	
}
