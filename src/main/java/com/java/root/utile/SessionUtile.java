package com.java.root.utile;

import java.util.HashMap;

import javax.servlet.http.HttpSession;

public class SessionUtile {
	
	/*********************************************
	 * 로그인 섹션 처리
	 * 1) Session 저장
	 * 2) Session 초기화(삭제)
	 * 3) Session 검색
	 *********************************************/

	public static void setSession(HttpSession session, HashMap<String, Object> user) {
		System.out.println(user.toString());
		session.setAttribute("user", user);
	}
	
	public static void delSession(HttpSession session) {
		session.invalidate();
	}
	
	public static HashMap<String, Object> getSession(HttpSession session) {
		HashMap<String, Object> user = (HashMap<String, Object>) session.getAttribute("user");
		if(user == null) {
			System.out.println("사용자 정보가 없습니다.");
			return null;
		}else {
			System.out.println("사용자 정보가 있습니다.");
			System.out.println(user.toString());
			return user;
		}
	}
	
	public static boolean checkSession(HttpSession session) {
		HashMap<String, Object> user = (HashMap<String, Object>) session.getAttribute("user");
		if(user == null) {
			return false;
		}else {
			return true;
		}
	}
}
