package com.lti.spring.HomeLoan.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name="loan")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class Loan {
	
	@Id
	@Column(name = "applicationnumber")
	@JsonProperty("applicationId")
	private String applicationNumber;

	@Column(name = "emailid")
	@JsonProperty("emailIdLoan")
	private String emailId;
	
	@Column(name = "loanamount")
	@JsonProperty("loanAmount")
	private int loanAmount;
	
	@Column(name = "tenure")
	private int tenure;
	
	@Column(name = "calculatedemi")
	private double calculatedEmi;
	
	@Column(name = "applicationstatus")
	@JsonProperty("applicationStatus")
	private String applicationStatus;
	
	@Column(name="accountno")
    @JsonProperty("accountNumber")
	private String accountNumber;
	
	@Column(name="balance")
    @JsonProperty("balance")
	private long balance;


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


	public String getApplicationNumber() {
		return applicationNumber;
	}
	

	public void setApplicationNumber(String applicationNumber) {
		this.applicationNumber = applicationNumber;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public int getLoanAmount() {
		return loanAmount;
	}

	public void setLoanAmount(int loanAmount) {
		this.loanAmount = loanAmount;
	}

	public int getTenure() {
		return tenure;
	}

	public void setTenure(int tenure) {
		this.tenure = tenure;
	}

	public double getCalculatedEmi() {
		return calculatedEmi;
	}

	public void setCalculatedEmi(double calculatedEmi) {
		this.calculatedEmi = calculatedEmi;
	}

	public String getApplicationStatus() {
		return applicationStatus;
	}

	public void setApplicationStatus(String applicationStatus) {
		this.applicationStatus = applicationStatus;
	}


	@Override
	public String toString() {
		return "Loan [applicationNumber=" + applicationNumber + ", emailId=" + emailId + ", loanAmount=" + loanAmount
				+ ", tenure=" + tenure + ", calculatedEmi=" + calculatedEmi + ", applicationStatus=" + applicationStatus
				+ ", accountNumber=" + accountNumber + ", balance=" + balance + "]";
	}

	

}
