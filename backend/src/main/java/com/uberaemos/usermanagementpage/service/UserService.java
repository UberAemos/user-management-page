package com.uberaemos.usermanagementpage.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import com.uberaemos.usermanagementpage.model.User;
import com.uberaemos.usermanagementpage.model.response.UserResponse;
import com.uberaemos.usermanagementpage.repository.UserRepository;

@Service
public class UserService {
	
	@Autowired 
	UserRepository repository;
	
	public UserResponse getAll(int pageNumber) {
		Page<User> users = repository.findAll(PageRequest.of(pageNumber, 6));
		int maxPages = users.getTotalPages();
		UserResponse response = new UserResponse(users.getContent(), maxPages, pageNumber);
		return response;
	}
}
