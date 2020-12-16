package com.lti.spring.HomeLoan.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.lti.spring.HomeLoan.model.ConfirmationTable;

@Repository
public interface ConfirmationDao extends CrudRepository<ConfirmationTable, String> {
	
	@Query("from ConfirmationTable where confirmationToken = ?1")
	List<ConfirmationTable> findByConfirmationToken(String id);

	

}