package com.lti.spring.HomeLoan.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.lti.spring.HomeLoan.model.Customer;
import com.lti.spring.HomeLoan.model.GetUsers;

@Repository
public interface CustomerDao extends CrudRepository<Customer, String> {
	
	@Query("from Customer where emailid = ?1 and password=?2")
	List<Customer> findCustomerByEmailAndPassword(String email, String password);
	
	@Query("from Customer c where c.emailId in (select l.emailId from Loan l where l.applicationNumber=?1)")
	List<Customer> findByApplicationId(String id);
	
	@Query("select c.fname, c.lname, l.applicationNumber from Customer c, Loan l where c.emailId in (select r.emailId from Loan r where r.applicationStatus = :status)")
	List<GetUsers> getNames(@Param("status") String status);

}