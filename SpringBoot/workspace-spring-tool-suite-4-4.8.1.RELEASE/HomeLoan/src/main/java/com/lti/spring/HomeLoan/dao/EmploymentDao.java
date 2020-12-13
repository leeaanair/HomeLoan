package com.lti.spring.HomeLoan.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.lti.spring.HomeLoan.model.EmbeddedKey;
import com.lti.spring.HomeLoan.model.EmploymentDetails;
import com.lti.spring.HomeLoan.model.PropertyDetails;

public interface EmploymentDao extends CrudRepository<EmploymentDetails, EmbeddedKey> {
	
	@Query("from EmploymentDetails where applicationnumber = ?1")
	public List<EmploymentDetails> findByApplicationId(String id);


}
