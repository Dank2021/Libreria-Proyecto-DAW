package com.example.demo.repository;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import com.example.demo.model.User;

@Repository
public interface UserRepository extends  MongoRepository<User, Integer> {

	//Spring Data Derived findBy Query Methods
	//Retrieve all records from the database based on the UserName
	//https://www.websparrow.org/spring/spring-data-derived-findby-query-methods-example
	org.apache.catalina.User findByUserName(String userName);
}