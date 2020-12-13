package com.lti.spring.HomeLoan.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.lti.spring.HomeLoan.model.EmbeddedKey;
import com.lti.spring.HomeLoan.model.EmploymentDetails;
import com.lti.spring.HomeLoan.model.Loan;

public interface LoanDao extends CrudRepository<Loan, EmbeddedKey> {
	
	@Query("from Loan where applicationnumber = ?1")
	public List<Loan> findByApplicationId(String id);


}
