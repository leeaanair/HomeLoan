package com.lti.AdminLogin.controller;

import java.security.NoSuchAlgorithmException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lti.AdminLogin.dao.AdminDao;
import com.lti.AdminLogin.entity.Admin;


@RestController
@CrossOrigin(origins = "*")
public class AdminLoginController {
	
	@Autowired
	private AdminDao admindao;

    @RequestMapping("/")
    public String showHome() {
  
    	return "home";
    }
    
    
//    @PostMapping(value="/customer", consumes = "application/json")
//    public int addUser(@RequestBody Customer customer) throws NoSuchAlgorithmException {
//    	    	
//    	Optional<Customer> customer1 = customerDao.findById(customer.getEmailId()); 
//
//    	if(customer1.isPresent()) {
//    		
//    		
//    	    MessageDigest md = MessageDigest.getInstance("MD5");
//    	    md.update(customer.getPassword().getBytes());
//    	    byte[] digest = md.digest();
//    	    String myHash = DatatypeConverter.printHexBinary(digest).toUpperCase();
//    	    
//    		customer.setPassword(myHash);
//        	customerDao.save(customer);
//        	return 2;
//
//    	}
//    	else{
//    		return 0;
//    	}
//
//    }
    
    @PostMapping(value="/adminlogin", consumes = "application/json")
    public int loginUser(@RequestBody Admin admin) throws NoSuchAlgorithmException {
    	
    	
    	String password = admin.getPassword();
    	List<Admin> admin1 = admindao.findAdminByEmailAndPassword(admin.getUsername(),password);
    	if(admin1.isEmpty()) {
    		return 0;
    	}
    	else {
        	return 2;    		
    	}
    }

	
}
