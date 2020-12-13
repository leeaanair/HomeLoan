package com.lti.spring.HomeLoan.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ForgotPassword {
	
	@JsonProperty("emailId")
	private String emailId;

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	
	

}
