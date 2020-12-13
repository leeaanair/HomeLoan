package com.lti.spring.HomeLoan.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name="adminlogin")
public class Admin {
	
	@Column(name="username")
    @JsonProperty("username")
	@Id
	private String username;
	
	@Column(name="password")
    @JsonProperty("password")
	private String password;

	public Admin() {
		super();
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Admin [username=" + username + ", password=" + password + "]";
	}

}