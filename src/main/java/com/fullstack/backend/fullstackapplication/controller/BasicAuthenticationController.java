package com.fullstack.backend.fullstackapplication.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fullstack.backend.fullstackapplication.bean.AuthenticationBean;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class BasicAuthenticationController {
	
	@GetMapping(value="/basicauth")
	public AuthenticationBean getAuthenticate() {
		
		
		return new AuthenticationBean("You are authenticated"); 
	}
}
