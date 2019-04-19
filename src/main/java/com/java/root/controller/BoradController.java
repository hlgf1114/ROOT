package com.java.root.controller;

import java.util.HashMap;
import java.util.Iterator;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.java.root.service.BoardServiceInterface;
import com.java.root.utile.HttpUtile;

@Controller
public class BoradController {

	@Autowired
	BoardServiceInterface bsi;
	
	@RequestMapping(value="/Board/Insert", method=RequestMethod.POST)
	public String fileUpload(HttpServletRequest req, HttpSession session) {
		HashMap<String, Object> paramMap = HttpUtile.getParam(req);
		for( String key : paramMap.keySet() ){
            System.out.println( String.format("키 : %s, 값 : %s", key, paramMap.get(key)) );
        }
		return "redirect:/main";
	}
	
}
