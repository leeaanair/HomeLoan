package com.lti.spring.HomeLoan.model;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonInclude;

@Entity
@Table(name="document")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class DocumentVerified {
	
	@EmbeddedId
	private EmbeddedKey embeddedDocument;
	
	@Column(name="pancard")
	private int panCard;
	
	@Column(name="aadharcard")
	private int aadharCard;
	
	@Column(name="voterid")
	private int voterId;
	
	@Column(name="salaryslip")
	private int salarySlip;
	
	@Column(name="loa")
	private int LOA;
	
	@Column(name="noc")
	private int NOC;
	
	@Column(name="agreement")
	private int agreement;
	
	@Column(name="eligible")
	private int eligible;

	public EmbeddedKey getEmbeddedDocument() {
		return embeddedDocument;
	}

	public int getPanCard() {
		return panCard;
	}

	public void setPanCard(int panCard) {
		this.panCard = panCard;
	}

	public int getAadharCard() {
		return aadharCard;
	}

	public void setAadharCard(int aadharCard) {
		this.aadharCard = aadharCard;
	}

	public int getVoterId() {
		return voterId;
	}

	public void setVoterId(int voterId) {
		this.voterId = voterId;
	}

	public int getSalarySlip() {
		return salarySlip;
	}

	public void setSalarySlip(int salarySlip) {
		this.salarySlip = salarySlip;
	}

	public int getLOA() {
		return LOA;
	}

	public void setLOA(int lOA) {
		LOA = lOA;
	}

	public int getNOC() {
		return NOC;
	}

	public void setNOC(int nOC) {
		NOC = nOC;
	}

	public int getAgreement() {
		return agreement;
	}

	public void setAgreement(int agreement) {
		this.agreement = agreement;
	}

	public int getEligible() {
		return eligible;
	}

	public void setEligible(int eligible) {
		this.eligible = eligible;
	}

	public void setEmbeddedDocument(EmbeddedKey embeddedDocument) {
		this.embeddedDocument = embeddedDocument;
	}

	@Override
	public String toString() {
		return "DocumentVerified [embeddedDocument=" + embeddedDocument + ", panCard=" + panCard + ", aadharCard="
				+ aadharCard + ", voterId=" + voterId + ", salarySlip=" + salarySlip + ", LOA=" + LOA + ", NOC=" + NOC
				+ ", agreement=" + agreement + ", eligible=" + eligible + "]";
	}

	
	

}
