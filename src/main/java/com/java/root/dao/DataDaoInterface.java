package com.java.root.dao;

import java.util.HashMap;
import java.util.List;

public interface DataDaoInterface {
	
	public List<HashMap<String, Object>> selectList(HashMap<String, Object> paramMap);

}
