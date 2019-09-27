package com.uberaemos.usermanagementpage.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class User {
	@Id String id;
	String name, surname, phone;
	
	
	public User() {	}

	public User(String name, String surname, String phone) {
		this.name = name;
		this.surname = surname;
		this.phone = phone;
	}
	
	public String getId() {return id;}
	public String getName() {return name;}
	public void setName(String name) {this.name = name;}
	public String getSurname() {return surname;}
	public void setSurname(String surname) {this.surname = surname;}
	public String getPhone() {return phone;}
	public void setPhone(String phone) {this.phone = phone;}

	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", surname=" + surname + ", phone=" + phone + "]";
	}
}