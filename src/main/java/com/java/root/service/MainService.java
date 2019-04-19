package com.java.root.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java.root.dao.MainDaoInterface;

@Service
public class MainService implements MainServiceInterface {

	@Autowired
	MainDaoInterface mdi;
}
