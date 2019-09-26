package com.uberaemos.usermanagementpage.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.uberaemos.usermanagementpage.model.User;
import com.uberaemos.usermanagementpage.model.response.UserResponse;
import com.uberaemos.usermanagementpage.service.UserService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

	@Autowired
	UserService service;
	
	@GetMapping
	public ResponseEntity<UserResponse> getUsers(@RequestParam int pageNumber) {
		return new ResponseEntity<UserResponse>(service.getAll(pageNumber), HttpStatus.OK);
	}
}