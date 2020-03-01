package com.ubaid.BootAngularApp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class BootAngularAppApplication
{

	public static void main(String[] args)
	{
		SpringApplication.run(BootAngularAppApplication.class, args);
	}

}
