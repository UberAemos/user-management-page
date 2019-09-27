package com.uberaemos.usermanagementpage.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	
	@DeleteMapping("/user")
	public ResponseEntity<UserResponse> deleteUser(@RequestParam String userId, @RequestParam int pageNumber) {
		return new ResponseEntity<UserResponse>(service.deleteUser(userId, pageNumber), HttpStatus.OK);
	}
	
	@PutMapping("/user")
	public ResponseEntity<UserResponse> deleteUser(@RequestBody User user) {
		return new ResponseEntity<UserResponse>(service.saveUser(user), HttpStatus.OK);
	}
	
	@PostMapping("/user")
	public ResponseEntity<UserResponse> addUser(@RequestBody User user) {
		return new ResponseEntity<UserResponse>(service.saveUser(user), HttpStatus.OK);
	}
}