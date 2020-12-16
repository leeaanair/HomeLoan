package com.lti.spring.HomeLoan.controller;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.xml.bind.DatatypeConverter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.lti.spring.HomeLoan.dao.AdminDao;
import com.lti.spring.HomeLoan.dao.ConfirmationDao;
import com.lti.spring.HomeLoan.dao.CustomerDao;
import com.lti.spring.HomeLoan.dao.EmploymentDao;
import com.lti.spring.HomeLoan.dao.FileStorageService;
import com.lti.spring.HomeLoan.dao.LoanDao;
import com.lti.spring.HomeLoan.dao.PropertyDao;
import com.lti.spring.HomeLoan.model.Admin;
import com.lti.spring.HomeLoan.model.Application;
import com.lti.spring.HomeLoan.model.ConfirmationTable;
import com.lti.spring.HomeLoan.model.Customer;
import com.lti.spring.HomeLoan.model.EmbeddedKey;
import com.lti.spring.HomeLoan.model.EmploymentDetails;
import com.lti.spring.HomeLoan.model.ForgotPassword;
import com.lti.spring.HomeLoan.model.Loan;
import com.lti.spring.HomeLoan.model.PropertyDetails;

@RestController
@CrossOrigin(origins = "*")
public class HomeController {
	
	
    @PersistenceContext
    private EntityManager entityManager;
	
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
    
	@Autowired
	private AdminDao admindao;
	
	
	@Autowired
	private ConfirmationDao confirmationDao;
	
    
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
    
    
    //user registration
    @PostMapping(value="/customer", consumes = "application/json")
    public int addUser(@RequestBody Customer customer) throws NoSuchAlgorithmException {
    	    	
    	Optional<Customer> customer1 = customerDao.findById(customer.getEmailId()); 

    	if(customer1.isPresent()) {
    		return 0;
    	}
    	else {
    		
    		String myHash = getHash(customer.getPassword());    	    
    		customer.setPassword(myHash);
        	customerDao.save(customer);
        	return 2;

    	}

    }
    
    //user login
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
    
    
    //forgot password
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
    		
    		ConfirmationTable confirmationTable = new ConfirmationTable();
    		confirmationTable.setEmailId(email);
    		confirmationTable.setConfirmationToken(UUID.randomUUID().toString());
    		confirmationDao.save(confirmationTable);
    		
            SimpleMailMessage message = new SimpleMailMessage(); 
            message.setFrom("leeaanair1@gmail.com");
            message.setTo(email); 
            message.setSubject("Reset password for HomeLoan"); 
            message.setText("Hello. This is the link to reset your password. \n http:localhost:4200/reset?token="+confirmationTable.getConfirmationToken());
            emailSender.send(message);

    		return 1;
    	}

    }
    
//    
    @PostMapping(value="/resetPassword")
    public int resetPassword(@RequestBody ConfirmationTable confirmation) throws NoSuchAlgorithmException{
    	
    	System.out.println(confirmation);
    	String email = confirmationDao.findByConfirmationToken(confirmation.getConfirmationToken()).get(0).getEmailId();
    	Customer customer = customerDao.findById(email).get();
    	
		String myHash = getHash(confirmation.getPassword());    	        	
    	customer.setPassword(myHash);
    	customerDao.save(customer);
    	return 1;
    	
    }
//    
    
       
    //uploading data and files
    @PostMapping(value="/uploadApplication2",consumes = {MediaType.MULTIPART_FORM_DATA_VALUE, "application/json"})
    public String uploadApplication2(@RequestPart("pan") MultipartFile pan, @RequestPart("voter") MultipartFile voter, 
    		@RequestPart("salary") MultipartFile salary, @RequestPart("loa") MultipartFile loa, @RequestPart("noc") MultipartFile noc,
    		@RequestPart("buildernoc") MultipartFile buildernoc, @RequestPart("builderagree") MultipartFile builderagree, 
    		@RequestPart("agree") MultipartFile agree, @RequestPart("application") Application application) throws JsonProcessingException {

    	String applicationId = getApplicationID();

    	System.out.println(application);
    	System.out.println(pan.getOriginalFilename());
    	
    	
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
        	  
        	  e.printStackTrace();
          }

        EmbeddedKey embeddedKey  = application.getEmbeddedDocument();
    	String email = embeddedKey.getEmailId();
    	embeddedKey.setApplicationNumber(applicationId); 
    	
    	Loan loan = application.getLoan();
    	loan.setApplicationNumber(applicationId);
    	loan.setEmailId(embeddedKey.getEmailId());
    	loan.setApplicationStatus("pending");
    	
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
    	customer.setMname(newCustomer.getMname());
    	
    	customer.setPassword(newCustomer.getPassword());
    	customerDao.save(customer);
    	
    	//updating loan
    	loanDao.save(loan);
    
    	//updating details employmentdetails
    	employmentDao.save(employmentDetails);
    	
    	//updating propertydetails
    	propertyDao.save(propertyDetails);
   	
    	return applicationId;
    }

    
    //gettin user details based on application id
	@GetMapping(value="/getUser/{id}")
    public ResponseEntity<Application> getUser(@PathVariable ("id") String id) {
    	
	List<PropertyDetails> propertyDetails = propertyDao.findByApplicationId(id);
	List<EmploymentDetails> employmentDetails = employmentDao.findByApplicationId(id);
	List<Loan> loan = loanDao.findByApplicationId(id);
	List<Customer> customer = customerDao.findByApplicationId(id); 
	
	Application application = new Application();
	application.setCustomer(customer.get(0));
	application.setLoan(loan.get(0));
	application.setEmploymentdetails(employmentDetails.get(0));
	application.setPropertydetails(propertyDetails.get(0));
	
	return ResponseEntity.ok(application);    	
    }
	
	
	//admin view the pdf based on application id and name
	@GetMapping("/getPDF/{id}/{name}")
	public ResponseEntity<ByteArrayResource> downloadFile(@PathVariable ("id") String id, @PathVariable ("name" ) String name) throws Exception {
		File file = new File("uploads/"+id+"/"+name);

        HttpHeaders header = new HttpHeaders();
        header.add(HttpHeaders.CONTENT_DISPOSITION, "inline;filename=Dummy.pdf");
    
    	Path path = Paths.get(file.getAbsolutePath());
        
        ByteArrayResource resource = new ByteArrayResource(Files.readAllBytes(path));

        return ResponseEntity.ok()
                .headers(header)
                .contentLength(file.length())
                .contentType(MediaType.parseMediaType("application/pdf"))
                .body(resource);
	}
	
	
	//admin login
    @PostMapping(value="/adminlogin", consumes = "application/json")
    public int loginUser(@RequestBody Admin admin) throws NoSuchAlgorithmException {
    	
    	
    	String password = admin.getPassword();
    	System.out.println(password);
    	System.out.println(admin.getUsername());
    	List<Admin> admin1 = admindao.findAdminByEmailAndPassword(admin.getUsername(),password);
    	if(admin1.isEmpty()) {
    		return 0;
    	}
    	else {
        	return 2;    		
    	}
    }
    
    
    //admin changes the application status
    @PostMapping(value="/adminverification", consumes = "application/json")
    public int appVerifyloginUser(@RequestBody Loan loan) throws NoSuchAlgorithmException {
    	
    	System.out.println("the verified application is " + loan);
    	String id = loan.getApplicationNumber();
    	System.out.println(id);
    	List<Loan> loan1 = loanDao.findByApplicationId(id); 
    	Loan  loan2 = new Loan();
    	
    	System.out.println("generated account is "  + loan.getAccountNumber());
    	System.out.println("calcualted emi is  " + loan.getCalculatedEmi());
    	System.out.println("balance is  " + loan.getBalance());
    	
    	loan2=loan1.get(0);
    	
    	loan2.setApplicationStatus(loan.getApplicationStatus());
    	if(loan.getApplicationStatus().equals("approved")) {
        	loan2.setBalance(loan.getBalance());
        	loan2.setAccountNumber(loan.getAccountNumber());
        	loan2.setCalculatedEmi(loan.getCalculatedEmi());
    	}
    	
    	loanDao.save(loan2);
    	
    	//what to return ?
    	return 1;
    }
    
    
    //loan tracker
    @GetMapping(value="/userstatus/{id}/{email}")
    public Loan userStats(@PathVariable ("id") String id, @PathVariable ("email") String email) throws NoSuchAlgorithmException {
    	
    	System.out.println("user status is called");
    	List<Loan> loan1 = loanDao.findByApplicationIdAndEmail(id, email);	
    	System.out.println(loan1.get(0));
    	return loan1.get(0);
    }
    
    @GetMapping(value="/getUsers")
    public List<String> getUsers() throws NoSuchAlgorithmException{
    	
    	List<String> applicationId = loanDao.getAllApplicationId("pending");
    	System.out.println(applicationId);
    	return applicationId;
    	
    	
    }
	
}
