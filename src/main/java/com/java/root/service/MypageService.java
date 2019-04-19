package com.java.root.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java.root.dao.MypageDaoInterface;

@Service
public class MypageService implements MypageServiceInterface {

	@Autowired
	MypageDaoInterface mydi;
}
