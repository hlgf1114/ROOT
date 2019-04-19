package com.java.root.service;

import java.util.HashMap;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.java.root.dao.BoardDaoInterface;
import com.java.root.utile.FileUtile;
import com.java.root.utile.SessionUtile;

@Service
public class BoardService implements BoardServiceInterface {

	@Autowired
	BoardDaoInterface bdi;

	@Override
	public boolean fileUpload(HttpServletRequest req, MultipartFile file, HttpSession session) {
		
		HashMap<String, Object> user = SessionUtile.getSession(session);
		
		if(user == null) {
			return false;
		}else {
			String dir = user.get("uni_num").toString();
			// 파일 업로드 테스트
			FileUtile.saveFile(req, file, dir);			
			return true;
		}
		
	}
}
