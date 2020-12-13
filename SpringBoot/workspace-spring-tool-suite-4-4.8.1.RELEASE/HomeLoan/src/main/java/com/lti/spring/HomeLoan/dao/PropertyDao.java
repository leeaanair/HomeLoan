package com.lti.spring.HomeLoan.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.lti.spring.HomeLoan.model.EmbeddedKey;
import com.lti.spring.HomeLoan.model.PropertyDetails;

public interface PropertyDao extends CrudRepository<PropertyDetails, EmbeddedKey> {
	
	@Query("from PropertyDetails where applicationnumber = ?1")
	public List<PropertyDetails> findByApplicationId(String id);

}
