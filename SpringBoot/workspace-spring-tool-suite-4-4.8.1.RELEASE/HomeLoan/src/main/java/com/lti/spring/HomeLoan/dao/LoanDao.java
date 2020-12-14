package com.lti.spring.HomeLoan.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.lti.spring.HomeLoan.model.EmbeddedKey;
import com.lti.spring.HomeLoan.model.Loan;

public interface LoanDao extends CrudRepository<Loan, EmbeddedKey> {
	
	@Query("from Loan where applicationNumber = ?1")
	public List<Loan> findByApplicationId(String id);
	
	
	@Query("select r.applicationNumber from Loan r where r.applicationStatus= :status")
	public List<String> getAllApplicationId(@Param("status") String status);


}
