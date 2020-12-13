package com.lti.spring.HomeLoan.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.lti.spring.HomeLoan.model.Customer;

@Repository
public interface CustomerDao extends CrudRepository<Customer, String> {
	
	@Query("from Customer where emailid = ?1 and password=?2")
	List<Customer> findCustomerByEmailAndPassword(String email, String password);

}
