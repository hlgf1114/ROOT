package com.java.root.utile;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Iterator;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONObject;
import net.sf.json.JSONSerializer;

public class HttpUtile {
	
	/*********************************************
	 * 1. 파라메터 값 HashMap 저장하기 : getParam
	 * 2. 응답 화면 구성하기
	 *  - 문자열 출력 : printString
	 *  - JSON 출력 : printJson
	 * 3. 다른 사이트 URL 요청 : getUrl
	 *********************************************/

	public static HashMap<String, Object> getParam(HttpServletRequest req){
		HashMap<String, Object> paramMap = new HashMap<String, Object>();
		
		Enumeration<?> enums = req.getParameterNames();
		while (enums.hasMoreElements()) {
			String paramName = (String) enums.nextElement();
			String[] parameters = req.getParameterValues(paramName);
			if (parameters.length > 1) {
				paramMap.put(paramName, parameters);
			} else {
				try {
					paramMap.put(paramName, parameters[0]);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		}
		
		return paramMap;
	}
	
	public static void printString(HttpServletResponse resp, HashMap<String, Object> resultMap) {
		try {
			resp.setContentType("text/html; charset=UTF-8");
			resp.setCharacterEncoding("UTF-8");
			resp.getWriter().write(resultMap.toString());
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	public static void printJson(HttpServletResponse resp, HashMap<String, Object> resultMap) {
		try {
			resp.setContentType("text/html; charset=UTF-8");
			resp.setCharacterEncoding("UTF-8");
			JSONObject jobject = JSONObject.fromObject(JSONSerializer.toJSON(resultMap));
			resp.getWriter().write(jobject.toString());
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public static HashMap<String, Object> getUrl(String apiURL){
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		try {
		      URL url = new URL(apiURL);
		      HttpURLConnection con = (HttpURLConnection)url.openConnection();
		      con.setRequestMethod("POST"); // Post 통신
		      int responseCode = con.getResponseCode();
		      BufferedReader br = null;
		      if(responseCode==200) {
		    	  br = new BufferedReader(new InputStreamReader(con.getInputStream(), "utf-8"));
		      }else {
		    	  br = new BufferedReader(new InputStreamReader(con.getErrorStream(), "utf-8"));  
		      }		      
		      String inputLine = "";
		      StringBuffer res = new StringBuffer();
		      while ((inputLine = br.readLine()) != null) {
		        res.append(inputLine);
		      }
		      br.close();
		      if(responseCode==200) { // 성공적으로 데이터 가져왔을때 실행
		    	  JSONObject jsonObj = JSONObject.fromObject(JSONSerializer.toJSON(res.toString()));
		    	  Iterator<?> ierator = jsonObj.keys();
		    	  while(ierator.hasNext()) {
		    		  String key = ierator.next().toString();
		    		  String value = jsonObj.getString(key);
//		    		  System.out.println(key + " : " + value);
		    		  resultMap.put(key, value);
		    	  }
		      }
		    } catch (Exception e) {
		      e.printStackTrace();
		    }
		
		return resultMap;
	}
}
