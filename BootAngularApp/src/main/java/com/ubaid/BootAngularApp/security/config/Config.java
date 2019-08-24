package com.ubaid.BootAngularApp.security.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
@Order(Ordered.HIGHEST_PRECEDENCE)
public class Config extends WebSecurityConfigurerAdapter
{

	@Override
	protected void configure(HttpSecurity http) throws Exception
	{
		http
			.csrf().disable()
			
			.authorizeRequests()
			.antMatchers(HttpMethod.OPTIONS, "/**")
			.permitAll()

			.anyRequest()
			.authenticated()
			
			.and()
			.httpBasic();
	}
	
}
