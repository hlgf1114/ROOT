package com.java.root.controller;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.java.root.service.BoardServiceInterface;
import com.java.root.utile.HttpUtile;
import com.java.root.utile.SessionUtile;

@Controller
public class BoardController {

	@Autowired
	BoardServiceInterface bsi;
	
	@Autowired
	SqlSession session;
	
	/*********************
	 *write.jsp functions*
	 *********************/
	@RequestMapping(value="/Board/Insert", method=RequestMethod.POST)
	public void fileUpload(HttpServletRequest req, HttpServletResponse resp, HttpSession sess) {
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		if (SessionUtile.checkSession(sess)) {
			HashMap<String, Object> paramMap = HttpUtile.getParam(req);
			HashMap<String, Object> userMap = SessionUtile.getSession(sess);
			paramMap.put("uni_num", userMap.get("uni_num"));
			int state = session.insert("board.postInsert", paramMap);
			if(state == 1) {
				for( String key : paramMap.keySet() ){
		            if("file_name".equals(key)) {
		            	session.insert("board.fileInsert", paramMap);
		            	break;
		            }
		        }
				resultMap.put("state", 1);				
			} else {
				resultMap.put("state", 0);
			}
		} else {
			resultMap.put("state", 0);
		}
		HttpUtile.printJson(resp, resultMap);
	}
	
	/**********************
	 *detail.jsp functions*
	 **********************/
	@RequestMapping(value="/Board/Select", method=RequestMethod.POST)
	public void boardSelect(HttpServletRequest req, HttpServletResponse resp, HttpSession sess) {
		if (SessionUtile.checkSession(sess)) {
			HashMap<String, Object> paramMap = HttpUtile.getParam(req);
			HashMap<String, Object> resultMap = session.selectOne("board.boardSelect", paramMap);
			System.out.println(resultMap);
			HttpUtile.printJson(resp, resultMap);
		} else {
			
		}
	}
	
	@RequestMapping(value="/Board/Delete", method=RequestMethod.POST)
	public void boardDelete(HttpServletRequest req, HttpServletResponse resp, HttpSession sess) {
		if(SessionUtile.checkSession(sess)) {
			HashMap<String, Object> paramMap = HttpUtile.getParam(req);
			int state = session.update("board.boardDelete", paramMap);
			HashMap<String, Object> resultMap = new HashMap<String, Object>();
			System.out.println("state: " + state);
			HttpUtile.printJson(resp, resultMap);
		}
	}
	
	@RequestMapping(value="/Board/setComm", method=RequestMethod.POST)
	public void setComm(HttpServletRequest req, HttpServletResponse resp, HttpSession sess) {
		if(SessionUtile.checkSession(sess)) {
			HashMap<String, Object> paramMap = HttpUtile.getParam(req);
			int state = session.insert("board.setComm", paramMap);
			HashMap<String, Object> resultMap = new HashMap<String, Object>();
			resultMap.put("state", state);
			System.out.println("state: " + state);
			HttpUtile.printJson(resp, resultMap);
		}
	}
	
	@RequestMapping(value="/Board/getComment", method=RequestMethod.POST)
	public void getComment(HttpServletRequest req, HttpServletResponse resp, HttpSession sess) {
		if(SessionUtile.checkSession(sess)) {
			HashMap<String, Object> paramMap = HttpUtile.getParam(req);
			List<HashMap<String, Object>> resultMapList = session.selectList("board.getComment", paramMap);
			System.out.println(resultMapList);
			HttpUtile.printJsonList(resp, resultMapList);
		}
	}
	
	@RequestMapping(value="/Board/delComm", method=RequestMethod.POST)
	public void delComm(HttpServletRequest req, HttpServletResponse resp, HttpSession sess) {
		if(SessionUtile.checkSession(sess)) {
			HashMap<String, Object> paramMap = HttpUtile.getParam(req);
			HashMap<String, Object> resultMap = new HashMap<String, Object>();
			int state = session.delete("board.delComm", paramMap);
			resultMap.put("state", state);
			System.out.println(resultMap);
			HttpUtile.printJson(resp, resultMap);
		}
	}
	
}
