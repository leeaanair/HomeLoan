package com.lti.spring.HomeLoan;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name="customer")
public class Customer {
	
	@Column(name="fname")
    @JsonProperty("fname")
	private String fname;
	
	@Column(name="mname")
    @JsonProperty("mname")
	private String mname;
	
	@Column(name="lname")
    @JsonProperty("lname")
	private String lname;
	
	@Id
	@Column(name="emailid")
    @JsonProperty("emailId")
	private String emailId;
	
	@Column(name="address")
    @JsonProperty("address")
	private String address;
	
	@Column(name="password")
    @JsonProperty("password")
	private String password;
	
	@Column(name="dateofbirth")
    @JsonProperty("dateOfBirth")
	private Date dateOfBirth;
	
	@Column(name="phonenumber")
    @JsonProperty("phoneNumber")
	private String phoneNumber;
	
	@Column(name="gender")
    @JsonProperty("gender")
	private String gender;
	
	@Column(name="pancard")
    @JsonProperty("pancard")
	private String pancard;
	
	@Column(name="aadhaar")
    @JsonProperty("aadhaar")
	private String aadhaar;
	
	@Column(name="nationality")
    @JsonProperty("nationality")
	private String nationality;
	
	@Column(name="accountno")
    @JsonProperty("accountNumber")
	private String accountNumber;
	
	@Column(name="balance")
    @JsonProperty("balance")
	private long balance;

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getMname() {
		return mname;
	}

	public void setMname(String mname) {
		this.mname = mname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Date getDateOfBirth() {
		return dateOfBirth;
	}

	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getPancard() {
		return pancard;
	}

	public void setPancard(String pancard) {
		this.pancard = pancard;
	}

	public String getAadhaar() {
		return aadhaar;
	}

	public void setAadhaar(String aadhaar) {
		this.aadhaar = aadhaar;
	}

	public String getNationality() {
		return nationality;
	}

	public void setNationality(String nationality) {
		this.nationality = nationality;
	}

	public String getAccountNumber() {
		return accountNumber;
	}

	public void setAccountNumber(String accountNumber) {
		this.accountNumber = accountNumber;
	}

	public long getBalance() {
		return balance;
	}

	public void setBalance(long balance) {
		this.balance = balance;
	}

	@Override
	public String toString() {
		return "Customer [fname=" + fname + ", mname=" + mname + ", lname=" + lname + ", emailId=" + emailId
				+ ", address=" + address + ", password=" + password + ", dateOfBirth=" + dateOfBirth + ", phoneNumber="
				+ phoneNumber + ", gender=" + gender + ", pancard=" + pancard + ", aadhaar=" + aadhaar
				+ ", nationality=" + nationality + ", accountNumber=" + accountNumber + ", balance=" + balance + "]";
	}
	
	
	
}
