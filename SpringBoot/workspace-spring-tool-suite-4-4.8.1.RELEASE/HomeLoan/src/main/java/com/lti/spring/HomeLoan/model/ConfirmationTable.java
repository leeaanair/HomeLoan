package com.lti.spring.HomeLoan.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name="confirmationtable")
public class ConfirmationTable {
	
	@Id
	@Column(name="emailid")
	private String emailId;
	
	@Column(name="confirmationtoken")
	private String confirmationToken;
	
	@Transient
	private String password;
	
	

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getConfirmationToken() {
		return confirmationToken;
	}

	public void setConfirmationToken(String confirmationToken) {
		this.confirmationToken = confirmationToken;
	}

	@Override
	public String toString() {
		return "ConfirmationTable [emailId=" + emailId + ", confirmationToken=" + confirmationToken + ", password="
				+ password + "]";
	}
	
	
	
	

}
