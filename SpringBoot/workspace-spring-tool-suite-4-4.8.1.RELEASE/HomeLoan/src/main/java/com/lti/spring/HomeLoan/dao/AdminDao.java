package com.lti.spring.HomeLoan.dao;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.lti.spring.HomeLoan.model.Admin;


@Repository
public interface AdminDao extends CrudRepository <Admin, String> {
	
			@Query("from Admin where username=?1 and password=?2")
			List<Admin> findAdminByEmailAndPassword(String username, String password);

	


}
