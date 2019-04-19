package com.java.root.service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

public interface DataServiceInterface {

	public void selectList(HttpServletRequest req, HttpServletResponse resp, HttpSession session);
}
