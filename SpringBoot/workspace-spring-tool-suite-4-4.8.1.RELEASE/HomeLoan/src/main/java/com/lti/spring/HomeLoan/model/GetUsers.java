package com.lti.spring.HomeLoan.model;

public class GetUsers {
	
	private String applicationId;
	private String fname;
	private String lname;
	public String getApplicationId() {
		return applicationId;
	}
	public void setApplicationId(String applicationId) {
		this.applicationId = applicationId;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	@Override
	public String toString() {
		return "GetUsers [applicationId=" + applicationId + ", fname=" + fname + ", lname=" + lname + "]";
	}
	
	
	
	

}
