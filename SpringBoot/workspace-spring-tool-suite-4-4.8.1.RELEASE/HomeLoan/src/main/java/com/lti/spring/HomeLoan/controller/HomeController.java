package com.lti.spring.HomeLoan.controller;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.List;
import java.util.Optional;

import javax.xml.bind.DatatypeConverter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lti.spring.HomeLoan.Customer;
import com.lti.spring.HomeLoan.dao.CustomerDao;

@RestController
@CrossOrigin(origins = "*")
public class HomeController {
	
	@Autowired
	private CustomerDao customerDao;

    @RequestMapping("/")
    public String showHome() {
  
    	return "home";
    }
    
    
    @PostMapping(value="/customer", consumes = "application/json")
    public int addUser(@RequestBody Customer customer) throws NoSuchAlgorithmException {
    	    	
    	Optional<Customer> customer1 = customerDao.findById(customer.getEmailId()); 

    	if(customer1.isEmpty()) {
    		
    		
    	    MessageDigest md = MessageDigest.getInstance("MD5");
    	    md.update(customer.getPassword().getBytes());
    	    byte[] digest = md.digest();
    	    String myHash = DatatypeConverter.printHexBinary(digest).toUpperCase();
    	    
    		customer.setPassword(myHash);
        	customerDao.save(customer);
        	return 2;

    	}
    	else{
    		return 0;
    	}

    }
    
    @PostMapping(value="/loginuser", consumes = "application/json")
    public int loginUser(@RequestBody Customer customer) throws NoSuchAlgorithmException {
    	
	    MessageDigest md = MessageDigest.getInstance("MD5");
	    md.update(customer.getPassword().getBytes());
	    byte[] digest = md.digest();
	    String myHash = DatatypeConverter.printHexBinary(digest).toUpperCase();

    	List<Customer> customer1 = customerDao.findCustomerByEmailAndPassword(customer.getEmailId(), myHash);
    	if(customer1.isEmpty()) {
    		return 0;
    	}
    	else {
        	return 2;    		
    	}
    }

	
}
