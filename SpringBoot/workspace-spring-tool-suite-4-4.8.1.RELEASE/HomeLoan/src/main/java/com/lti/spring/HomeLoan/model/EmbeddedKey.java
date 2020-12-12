package com.lti.spring.HomeLoan.model;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import com.fasterxml.jackson.annotation.JsonProperty;

@Embeddable
public class EmbeddedKey implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Column(name="emailid")
	@JsonProperty("emailId")
	private String emailId;
	
	@Column(name="applicationnumber")
	@JsonProperty("applicationNumberembed")
	private String applicationNumber;

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getApplicationNumber() {
		return applicationNumber;
	}

	public void setApplicationNumber(String applicationNumber) {
		this.applicationNumber = applicationNumber;
	}

	@Override
	public String toString() {
		return "Embeddedkey [emailId=" + emailId + ", applicationNumber=" + applicationNumber + "]";
	}
	
	
	
	

}
