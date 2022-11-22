package com.example.demo.repository;



import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.Tutoria;
import com.example.demo.model.User;



public interface TutoriaRepository extends MongoRepository<Tutoria, String>{

	

	
}
