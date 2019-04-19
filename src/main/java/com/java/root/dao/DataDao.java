package com.java.root.dao;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class DataDao implements DataDaoInterface {
	
	@Autowired
	SqlSession session;

	@Override
	public List<HashMap<String, Object>> selectList(HashMap<String, Object> paramMap) {
		List<HashMap<String, Object>> list = session.selectList("user.select", paramMap);
		return list;
	}

}
