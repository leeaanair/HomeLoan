package com.lti.spring.HomeLoan;

import javax.annotation.Resource;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.lti.spring.HomeLoan.dao.FileStorageService;

@SpringBootApplication
public class HomeLoanApplication implements CommandLineRunner{
	
	  @Resource
	  FileStorageService storageService;

	public static void main(String[] args) {
		SpringApplication.run(HomeLoanApplication.class, args);
	}
	
	  @Override
	  public void run(String... arg) throws Exception {
	    storageService.deleteAll();
	    storageService.init();
	  }

}
