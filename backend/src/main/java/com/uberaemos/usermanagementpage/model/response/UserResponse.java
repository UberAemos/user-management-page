package com.uberaemos.usermanagementpage.model.response;

import java.util.List;

import com.uberaemos.usermanagementpage.model.User;

public class UserResponse {
	private List<User> users;
	private int maxPages;
	private int pageNumber;
	
	public UserResponse(List<User> users, int maxPages, int pageNumber) {
		this.users = users;
		this.maxPages = maxPages;
		this.pageNumber = pageNumber;
	}

	public List<User> getUsers() {return users;	}
	public int getMaxPages() {return maxPages;}
	public int getPageNumber() {return pageNumber;}
}
