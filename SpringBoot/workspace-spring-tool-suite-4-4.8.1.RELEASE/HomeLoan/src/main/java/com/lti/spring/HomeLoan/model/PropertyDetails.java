package com.lti.spring.HomeLoan.model;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

@Entity
@Table(name="propertydetails")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class PropertyDetails {

	@EmbeddedId
	private EmbeddedKey embeddedDocument;
	
	@Column(name="propertylocation")
	@JsonProperty("propertyLocation")
	private String propertyLocation;
	
	@Column(name="propertyname")
	@JsonProperty("propertyName")
	private String propertyName;
	
	@Column(name="estimatedamount")
	@JsonProperty("estimatedAmount")
	private int estimatedAmount;

	public EmbeddedKey getEmbeddedDocument() {
		return embeddedDocument;
	}

	public void setEmbeddedDocument(EmbeddedKey embeddedDocument) {
		this.embeddedDocument = embeddedDocument;
	}

	public String getPropertyLocation() {
		return propertyLocation;
	}

	public void setPropertyLocation(String propertyLocation) {
		this.propertyLocation = propertyLocation;
	}

	public String getPropertyName() {
		return propertyName;
	}

	public void setPropertyName(String propertyName) {
		this.propertyName = propertyName;
	}

	public int getEstimatedAmount() {
		return estimatedAmount;
	}

	public void setEstimatedAmount(int estimatedAmount) {
		this.estimatedAmount = estimatedAmount;
	}

	@Override
	public String toString() {
		return "PropertyDetails [embeddedDocument=" + embeddedDocument + ", propertyLocation=" + propertyLocation
				+ ", propertyName=" + propertyName + ", estimatedAmount=" + estimatedAmount + "]";
	}
	

	

}