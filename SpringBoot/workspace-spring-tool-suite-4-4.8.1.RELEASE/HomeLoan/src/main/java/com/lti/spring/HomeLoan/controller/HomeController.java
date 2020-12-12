package com.lti.spring.HomeLoan.controller;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.xml.bind.DatatypeConverter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.lti.spring.HomeLoan.dao.CustomerDao;
import com.lti.spring.HomeLoan.dao.EmploymentDao;
import com.lti.spring.HomeLoan.dao.FileStorageService;
import com.lti.spring.HomeLoan.dao.LoanDao;
import com.lti.spring.HomeLoan.dao.PropertyDao;
import com.lti.spring.HomeLoan.model.Application;
import com.lti.spring.HomeLoan.model.Customer;
import com.lti.spring.HomeLoan.model.EmbeddedKey;
import com.lti.spring.HomeLoan.model.EmploymentDetails;
import com.lti.spring.HomeLoan.model.ForgotPassword;
import com.lti.spring.HomeLoan.model.Loan;
import com.lti.spring.HomeLoan.model.PropertyDetails;

@RestController
@CrossOrigin(origins = "*")
public class HomeController {
	
	@Autowired
	private CustomerDao customerDao;
	
	@Autowired 
	private PropertyDao propertyDao;
	
	@Autowired 
	private EmploymentDao employmentDao;
	
	@Autowired
	private LoanDao loanDao;
	
	@Autowired
	private FileStorageService storageService;
	
    @Autowired
    private JavaMailSender emailSender;
    
	static final String AB = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	static SecureRandom rnd = new SecureRandom();


	
    public String getHash(String password) throws NoSuchAlgorithmException
    {
	    MessageDigest md = MessageDigest.getInstance("MD5");
	    md.update(password.getBytes());
	    byte[] digest = md.digest();
	    String myHash = DatatypeConverter.printHexBinary(digest).toUpperCase();
	    return myHash;

    }
    
    public String getApplicationID() {
    	
    	   StringBuilder sb = new StringBuilder(10);
    	   for(int i = 0; i < 10; i++)
    	      sb.append(AB.charAt(rnd.nextInt(AB.length())));
    	   return sb.toString();
    	
    }

    @RequestMapping("/")
    public String showHome() {
  
    	return "home";
    }
    
    
    @PostMapping(value="/customer", consumes = "application/json")
    public int addUser(@RequestBody Customer customer) throws NoSuchAlgorithmException {
    	    	
    	Optional<Customer> customer1 = customerDao.findById(customer.getEmailId()); 

    	if(customer1.isEmpty()) {
    		
    		String myHash = getHash(customer.getPassword());    	    
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
    

    	String myHash = getHash(customer.getPassword());
    	List<Customer> customer1 = customerDao.findCustomerByEmailAndPassword(customer.getEmailId(), myHash);
    	if(customer1.isEmpty()) {
    		return 0;
    	}
    	else {
        	return 2;    		
    	}
    }
    
    

    @PostMapping(value="/forgotpassword", consumes = "application/json")
    public int forgotPassword(@RequestBody ForgotPassword forgotPassword ) throws NoSuchAlgorithmException {
    	
    	String email = forgotPassword.getEmailId();
    	System.out.println("Forgotten email was " + email);
    	    	
    	Optional<Customer> customer1 = customerDao.findById(email); 
    	
    	System.out.println(customer1);

    	if(customer1.isEmpty()) {
    		
    		return 0;
    	}
    	
    	else{
    		
            SimpleMailMessage message = new SimpleMailMessage(); 
            message.setFrom("noreply@ltihomeloan.com");
            message.setTo(email); 
            message.setSubject("Reset password for HomeLoan"); 
            message.setText("Hello this is a test mail");
            emailSender.send(message);

    		return 1;
    	}

    }
    
    
    @PostMapping(value="/uploadApplication", consumes = "application/json")
    public String uploadApplication(@RequestBody Application application) throws JsonProcessingException {
    	
    	System.out.println(application);
    	
    	
    	EmbeddedKey embeddedKey  = application.getEmbeddedDocument();
    	String applicationId = getApplicationID();
    	String email = embeddedKey.getEmailId();
    	embeddedKey.setApplicationNumber(applicationId); 
    	
    	Loan loan = application.getLoan();
    	loan.setApplicationNumber(applicationId);
    	loan.setEmailId(embeddedKey.getEmailId());
    	
    	EmploymentDetails employmentDetails = application.getEmploymentdetails();
    	employmentDetails.setEmbeddedDocument(embeddedKey);
    	
    	PropertyDetails propertyDetails = application.getPropertydetails();
    	propertyDetails.setEmbeddedDocument(embeddedKey);

    	
    	//updating the customer
    	Customer customer = application.getCustomer();
    	customer.setEmailId(email);
    	Customer newCustomer = customerDao.findById(email).orElse(null);
    	customer.setFname(newCustomer.getFname());
    	customer.setLname(newCustomer.getLname());
    	customer.setPassword(newCustomer.getPassword());
    	customerDao.save(customer);
    	
    	//updating loan
    	loanDao.save(loan);
    
    	//updating details employmentdetails
    	employmentDao.save(employmentDetails);
    	
    	//updating propertydetails
    	propertyDao.save(propertyDetails);
    	
    	return "";
    }
    
    
    //    public String uploadApplication2(@RequestPart("file") MultipartFile file, @RequestPart("application") Application application) throws JsonProcessingException {


//    @PostMapping(value="/uploadApplication2",consumes = {MediaType.MULTIPART_FORM_DATA_VALUE, "application/json"})
//    public String uploadApplication2(@RequestParam("pan") MultipartFile pan, @RequestParam("voter") MultipartFile voter, 
//    		@RequestParam("salary") MultipartFile salary, @RequestParam("loa") MultipartFile loa, @RequestParam("noc") MultipartFile noc,
//    		@RequestParam("buildernoc") MultipartFile buildernoc, @RequestParam("builderagree") MultipartFile builderagree, 
//    		@RequestParam("agree") MultipartFile agree, @RequestParam("application") ArrayList<Application> application) throws JsonProcessingException {

    @PostMapping(value="/uploadApplication2",consumes = {MediaType.MULTIPART_FORM_DATA_VALUE, "application/json"})
    public String uploadApplication2(@RequestPart("pan") MultipartFile pan, @RequestPart("voter") MultipartFile voter, 
    		@RequestPart("salary") MultipartFile salary, @RequestPart("loa") MultipartFile loa, @RequestPart("noc") MultipartFile noc,
    		@RequestPart("buildernoc") MultipartFile buildernoc, @RequestPart("builderagree") MultipartFile builderagree, 
    		@RequestPart("agree") MultipartFile agree, @RequestPart("application") Application application) throws JsonProcessingException {

    	String applicationId = getApplicationID();

    	System.out.println(application);
    	System.out.println(pan.getOriginalFilename());
    	
//        Application application2 = new ObjectMapper().readValue(application, Application.class);  
//        System.out.println(application2);

    	
        try {
            storageService.save(pan, applicationId, "PAN");
            storageService.save(voter, applicationId, "VOTER");
            storageService.save(salary, applicationId, "SALARY");
            storageService.save(loa, applicationId, "LOA");
            storageService.save(noc, applicationId, "NOC");
            storageService.save(buildernoc, applicationId, "BUILDERNOC");
            storageService.save(builderagree, applicationId, "BUILDERAGREE");
            storageService.save(agree, applicationId, "AGREE");


          } catch (Exception e) {
        	  	System.out.println(e);
          }
//    //	System.out.println(filesnData.getFiles());
//    	
//    	
    	EmbeddedKey embeddedKey  = application.getEmbeddedDocument();
    	String email = embeddedKey.getEmailId();
    	embeddedKey.setApplicationNumber(applicationId); 
    	
    	Loan loan = application.getLoan();
    	loan.setApplicationNumber(applicationId);
    	loan.setEmailId(embeddedKey.getEmailId());
    	
    	EmploymentDetails employmentDetails = application.getEmploymentdetails();
    	employmentDetails.setEmbeddedDocument(embeddedKey);
    	
    	PropertyDetails propertyDetails = application.getPropertydetails();
    	propertyDetails.setEmbeddedDocument(embeddedKey);

    	
    	//updating the customer
    	Customer customer = application.getCustomer();
    	customer.setEmailId(email);
    	Customer newCustomer = customerDao.findById(email).orElse(null);
    	customer.setFname(newCustomer.getFname());
    	customer.setLname(newCustomer.getLname());
    	customer.setPassword(newCustomer.getPassword());
    	customerDao.save(customer);
    	
    	//updating loan
    	loanDao.save(loan);
    
    	//updating details employmentdetails
    	employmentDao.save(employmentDetails);
    	
    	//updating propertydetails
    	propertyDao.save(propertyDetails);
////    	
    	return applicationId;
    }


	
}
