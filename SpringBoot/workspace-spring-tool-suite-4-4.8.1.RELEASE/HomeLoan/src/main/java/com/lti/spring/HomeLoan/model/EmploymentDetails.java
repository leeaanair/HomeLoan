package com.lti.spring.HomeLoan.model;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name="employmentdetails")
public class EmploymentDetails {

	@EmbeddedId
	private EmbeddedKey embeddedDocument;
	
	@Column(name="employmenttype")
	@JsonProperty("employmentType")
	private String employmentType;
	
	@Column(name="employername")
	@JsonProperty("employerName")
	private String employerName;
	
	@Column(name="retirementage")
	@JsonProperty("retirementAge")
	private int retirementAge;
	
	@Column(name="monthlysalary")
	@JsonProperty("monthlySalary")
	private double monthlySalary;

	public EmbeddedKey getEmbeddedDocument() {
		return embeddedDocument;
	}

	public void setEmbeddedDocument(EmbeddedKey embeddedDocument) {
		this.embeddedDocument = embeddedDocument;
	}

	public String getEmploymentType() {
		return employmentType;
	}

	public void setEmploymentType(String employmentType) {
		this.employmentType = employmentType;
	}

	public String getEmployerName() {
		return employerName;
	}

	public void setEmployerName(String employerName) {
		this.employerName = employerName;
	}

	public int getRetirementAge() {
		return retirementAge;
	}

	public void setRetirementAge(int retirementAge) {
		this.retirementAge = retirementAge;
	}

	public double getMonthlySalary() {
		return monthlySalary;
	}

	public void setMonthlySalary(double monthlySalary) {
		this.monthlySalary = monthlySalary;
	}

	@Override
	public String toString() {
		return "EmploymentDetails [embeddedDocument=" + embeddedDocument + ", employmentType=" + employmentType
				+ ", employerName=" + employerName + ", retirementAge=" + retirementAge + ", monthlySalary="
				+ monthlySalary + "]";
	}
	
	
	

}
