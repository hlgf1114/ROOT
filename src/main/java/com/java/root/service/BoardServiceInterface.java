package com.java.root.service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.web.multipart.MultipartFile;

public interface BoardServiceInterface {

	public boolean fileUpload(HttpServletRequest req, MultipartFile file, HttpSession session);
}
