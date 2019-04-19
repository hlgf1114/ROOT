package com.java.root.dao;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class TestingDao implements TestingDaoInterface {

	@Autowired
	SqlSession session;
}
