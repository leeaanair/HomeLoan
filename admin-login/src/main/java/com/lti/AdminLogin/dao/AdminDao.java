package com.lti.AdminLogin.dao;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.lti.AdminLogin.entity.Admin;


	@Repository
	public interface AdminDao extends CrudRepository<Admin, String> {
		
		@Query("from Admin where username= ?1 and password=?2")
		List<Admin> findAdminByEmailAndPassword(String username, String password);

	}



