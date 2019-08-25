package com.ubaid.BootAngularApp.jwt.resources;
public class AuthenticationException extends RuntimeException {
	
    /**
	 * 
	 */
	private static final long serialVersionUID = -9166954151885372627L;

	public AuthenticationException(String message, Throwable cause) {
        super(message, cause);
    }
}

