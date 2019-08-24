package com.ubaid.BootAngularApp.controller.auth;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ubaid.BootAngularApp.entity.Authentication;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("auth")
public class AuthController
{	
	@GetMapping("user")
	public Authentication basicAuth()
	{
		return new Authentication("You are authenticated");
	}
}
