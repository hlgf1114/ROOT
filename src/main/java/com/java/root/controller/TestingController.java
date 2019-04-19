package com.java.root.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.java.root.service.TestingServiceInterface;

@Controller
public class TestingController {

	@Autowired
	TestingServiceInterface tsi;
}
