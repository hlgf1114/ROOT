package com.java.root.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java.root.dao.LoginDaoInterface;

@Service
public class LoginService implements LoginServiceInterface {

	@Autowired
	LoginDaoInterface ldi;
}
