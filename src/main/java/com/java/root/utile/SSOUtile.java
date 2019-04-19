package com.java.root.utile;

import java.math.BigInteger;
import java.net.URLEncoder;
import java.security.SecureRandom;
import java.util.HashMap;
import java.util.Iterator;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class SSOUtile {

	/*********************************************
	 * 카카오 로그인
	 * 	- 토큰 요청
	 *  - 사용자 정보
	 * 네이버 로그인
	 *  - 토큰 요청
	 *  - 사용자 정보
	 *********************************************/
	
	private static final String kakaoClientId = "46ca40dd0e5fe28374abe2eb8d132f8b"; //애플리케이션 클라이언트 아이디값";
	private static String kakaoRedirectURI = "http://%s/KakaoBack";
	
	private static final String naverClientId = "9x_ngmaP_W7dz9cVcoum";	//애플리케이션 클라이언트 아이디값";	
	private static final String naverClientSecret = "OHJYa5ZD1g";		//애플리케이션 클라이언트 시크릿값";
	private static String naverRedirectURI = "http://%s/NaverBack";
	
	public static void getKakaoToken(HttpServletRequest req, HttpServletResponse resp) {
		try {
			String responseType = "code";		
			String paramURL = "https://kauth.kakao.com/oauth/authorize";
			paramURL += "?client_id=" + kakaoClientId;
			paramURL += "&redirect_uri=" + String.format(kakaoRedirectURI, req.getServerName());
			paramURL += "&response_type=" + responseType;
			
			String apiURL = "https://accounts.kakao.com/login";
		    apiURL += "?continue=" + URLEncoder.encode(paramURL, "UTF-8");
		    
		    System.out.println("apiURL="+apiURL);
		    resp.sendRedirect(apiURL);
		}catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public static void getNaverToken(HttpServletRequest req, HttpServletResponse resp) {
		try {
			SecureRandom random = new SecureRandom();
		    String state = new BigInteger(130, random).toString();
		    String apiURL = "https://nid.naver.com/oauth2.0/authorize?response_type=code";
		    apiURL += "&client_id=" + naverClientId;
		    apiURL += "&redirect_uri=" + URLEncoder.encode(String.format(naverRedirectURI, req.getServerName()), "UTF-8");
		    apiURL += "&state=" + state;
		    System.out.println(apiURL);
		    resp.sendRedirect(apiURL);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	public static HashMap<String, Object> getKakaoUser(HttpServletRequest req){
		HashMap<String, Object> user = new HashMap<String, Object>();
		String apiURL = "";
		try {
			// token key 요청
			String grantType = "authorization_code";
			String code = req.getParameter("code");
		    apiURL = "https://kauth.kakao.com/oauth/token";
		    apiURL += "?grant_type=" + grantType;
		    apiURL += "&client_id=" + kakaoClientId;
		    apiURL += "&redirect_uri=" + URLEncoder.encode(String.format(kakaoRedirectURI, req.getServerName()), "UTF-8");
		    apiURL += "&code=" + code;
		    System.out.println("apiURL="+apiURL);
		    HashMap<String, Object> resultMap = HttpUtile.getUrl(apiURL);
		    
		    // 응답받은 token key 사용자 정보 요청
		    String access_token = resultMap.get("access_token").toString();
			apiURL = "https://kapi.kakao.com/v2/user/me";
		    apiURL += "?access_token=" + access_token;
		    System.out.println("apiURL="+apiURL);
		    HashMap<String, Object> returnMap = HttpUtile.getUrl(apiURL);
		    Iterator<String> iterator = returnMap.keySet().iterator();
		    while(iterator.hasNext()) {
		    	String key = iterator.next();
		    	String value = returnMap.get(key).toString();
		    	user.put(key, value);
//		    	if("properties".equals(key)) {
//		    		JSONObject jo = JSONObject.fromObject(JSONSerializer.toJSON(value));
//		    		Iterator<String> iter = jo.keys();
//		    		while(iter.hasNext()) {
//		    			String name = iter.next();
//		    			String text = jo.getString(name);
//		    			meMap.put(name, text);
//		    		}
//		    	}
		    }
		    
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return user;
	}
	
	public static HashMap<String, Object> getNaverUser(HttpServletRequest req){
		HashMap<String, Object> user = new HashMap<String, Object>();
		String apiURL = "";
		try {
			// token key 요청
			apiURL = "https://nid.naver.com/oauth2.0/token";
		    apiURL += "?grant_type=authorization_code";
		    apiURL += "&client_id=" + naverClientId;
		    apiURL += "&client_secret=" + naverClientSecret;
		    apiURL += "&redirect_uri=" + URLEncoder.encode(String.format(naverRedirectURI, req.getServerName()), "UTF-8");;
		    apiURL += "&code=" + req.getParameter("code");
		    apiURL += "&state=" + req.getParameter("state");
		    System.out.println("apiURL="+apiURL);
		    HashMap<String, Object> resultMap = HttpUtile.getUrl(apiURL);
	      /********************************************************************************
	  	   * access_token 		: 접근 토큰, 발급 후 expires_in 파라미터에 설정된 시간(초)이 지나면 만료됨
	  	   * refresh_token		: 갱신 토큰, 접근 토큰이 만료될 경우 접근 토큰을 다시 발급받을 때 사용
	  	   * token_type			: 접근 토큰의 타입으로 Bearer와 MAC의 두가지를 지원
	  	   * expires_in			: 접근 토큰의 유효 기간(초 단위)
	  	   * error				: 에러 코드
	  	   * error_description 	: 에러 메시지
	  	   * 참조 URL				: https://developers.naver.com/docs/login/api/
	  	   ********************************************************************************/
		    
		 // 응답받은 token key 사용자 정보 요청
		    String access_token = resultMap.get("access_token").toString();
		    apiURL = "https://openapi.naver.com/v1/nid/me";
		    apiURL += "?token_type=bearer";
		    apiURL += "&access_token=" + access_token;
		    System.out.println("apiURL="+apiURL);
		    HashMap<String, Object> returnMap = HttpUtile.getUrl(apiURL);
		    Iterator<String> iterator = returnMap.keySet().iterator();
		    while(iterator.hasNext()) {
		    	String key = iterator.next();
		    	String value = returnMap.get(key).toString();
		    	user.put(key, value);
//		    	if("response".equals(key)) {
//		    		JSONObject jo = JSONObject.fromObject(JSONSerializer.toJSON(value));
//		    		Iterator<String> iter = jo.keys();
//		    		while(iter.hasNext()) {
//		    			String name = iter.next();
//		    			String text = jo.getString(name);
//		    			meMap.put(name, text);
//		    		}
//		    	}		    	
		    }
		  /********************************************************************************
	  	   * resultcode				: API 호출 결과 코드
	  	   * message				: 호출 결과 메시지
	  	   * response				: 사용자 정보 목록
	  	   * response/id			: 동일인 식별 정보
	  	   *  					  	네이버 아이디마다 고유하게 발급되는 유니크한 일련번호 값
	  	   *  					 	(API 호출 결과로 네이버 아이디값은 제공하지 않으며, 대신 'id'라는 애플리케이션당 유니크한 일련번호값을 이용해서 자체적으로 회원정보를 구성하셔야 합니다.)
	  	   * response/nickname		: 사용자 별명 (별명이 설정되어 있지 않으면 id*** 형태로 리턴됩니다.)
	  	   * response/name			: 사용자 이름
	  	   * response/email			: 사용자 메일 주소
	  	   * 					  	기본적으로 네이버 내정보에 등록되어 있는 '기본 이메일' 즉 네이버ID@naver.com 값이나, 사용자가 다른 외부메일로 변경했을 경우는 변경된 이메일 주소로 됩니다.
	  	   * response/gender		: 성별 - F: 여성 - M: 남성 - U: 확인불가
	  	   * response/age			: 사용자 연령대
	  	   * response/birthday		: 사용자 생일(MM-DD 형식)
	  	   * response/profile_image	: 사용자 프로필 사진 URL
	  	   * 참조 URL					: https://developers.naver.com/docs/login/profile/
	  	   ********************************************************************************/
		    
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return user;
	}
}
