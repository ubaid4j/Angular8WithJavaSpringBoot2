package com.ubaid.BootAngularApp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class TodoService
{

	public static void main(String[] args)
	{
		SpringApplication.run(TodoService.class, args);
	}

}
