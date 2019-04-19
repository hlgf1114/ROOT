package com.java.root.utile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.HashMap;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.multipart.MultipartFile;

public class FileUtile {

	/*********************************************
	 * 파일 업로드 : saveFile
	 *********************************************/
	
	public static HashMap<String, Object> saveFile(HttpServletRequest req, MultipartFile file, String dir){
		HashMap<String, Object> resultMap = new HashMap<String, Object>();
		try {
			byte[] bytes = file.getBytes();
			String path2 = "resources/upload/";
			String name = file.getOriginalFilename();
			
			String path = "";
			path = req.getSession().getServletContext().getRealPath("/").concat(path2).concat(dir).concat("/");
			System.out.println(path);
			
			// 디렉토리 여부 확인 후 생성
			File uploadDir = new File(path);
	        if (!uploadDir.exists()) {
	            uploadDir.mkdir();
	        }
			
	        // 파일 고유 이름으로 변경 후 생성
	        /************************************ 파일 이름 변경하기 ************************************/
	        String fileName = name;
            String ext = fileName.substring(fileName.lastIndexOf("."), fileName.length());
            UUID one = UUID.randomUUID();
            System.out.println("변경 전 파일이름 : " + name);
            fileName = one.toString() + ext;
            System.out.println("변경 후 파일이름 : " + fileName);
            /************************************ 파일 이름 변경하기 ************************************/
			File f = new File(path + fileName);
			OutputStream out = new FileOutputStream(f);
			out.write(bytes);
			out.close();
			resultMap.put("path", path2);
			resultMap.put("OriginalName", name);
			resultMap.put("name", fileName);
		} catch (IOException e) {
			e.printStackTrace();
		}  
		
		return resultMap;
	}
	
}
