package com.uberaemos.usermanagementpage.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.uberaemos.usermanagementpage.model.User;

@Repository
public interface UserRepository extends MongoRepository<User, String> {

}
