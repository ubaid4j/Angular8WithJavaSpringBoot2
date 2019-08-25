package com.ubaid.BootAngularApp;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class ByCriptTest {

	public static void main(String[] args)
	{
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		for(int i = 0; i < 10; i++)
		{
			String encodedPassword = encoder.encode("hellog");
			System.out.println(encodedPassword);
		}
	}

}
