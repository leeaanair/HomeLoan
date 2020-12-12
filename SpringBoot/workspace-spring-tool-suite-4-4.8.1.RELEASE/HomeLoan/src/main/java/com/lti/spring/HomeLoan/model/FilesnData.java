package com.lti.spring.HomeLoan.model;

import java.util.Arrays;

import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.annotation.JsonProperty;

public class FilesnData {
	
	@JsonProperty("application")
	private Application application;
	
	@JsonProperty("file")
	private MultipartFile file;

	
	
	
	public FilesnData(Application application, MultipartFile file) {
		super();
		this.application = application;
		this.file = file;
	}

	public Application getApplication() {
		return application;
	}

	public void setApplication(Application application) {
		this.application = application;
	}

	public MultipartFile getFiles() {
		return file;
	}

	public void setFiles(MultipartFile file) {
		this.file = file;
	}

	@Override
	public String toString() {
		return "FilesnData [application=" + application + ", files=" + file.getOriginalFilename() + "]";
	}

	
	
	
}
