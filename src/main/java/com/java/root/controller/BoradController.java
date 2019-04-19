package com.java.root.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

import com.java.root.service.BoardServiceInterface;

@Controller
public class BoradController {

	@Autowired
	BoardServiceInterface bsi;
}
