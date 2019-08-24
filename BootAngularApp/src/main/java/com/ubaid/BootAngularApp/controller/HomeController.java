package com.ubaid.BootAngularApp.controller;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ubaid.BootAngularApp.entity.HelloWorldBean;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:4200")
public class HomeController
{
	@GetMapping("helloWorld")
	public String helloWorld()
	{
		return "Hello World";
	}
	
	@GetMapping("helloWorldBean")
	public HelloWorldBean hellowWorldBean()
	{
//		throw new RuntimeException("Some unknown error -- Contact Support");
		return new HelloWorldBean("Hello World");
	}
	
	@GetMapping("/helloWorld/path/{name}")
	public HelloWorldBean PathVaraible(@PathVariable String name)
	{
		return new HelloWorldBean(String.format("Welcome %s here", name));
//		throw new RuntimeException("Unknow Error happens");
	}
}
