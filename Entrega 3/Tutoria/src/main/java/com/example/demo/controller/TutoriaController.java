package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Tutoria;
import com.example.demo.model.User;
import com.example.demo.repository.TutoriaRepository;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@Api(tags = {"Class: EstduianteController"}) //tag defined in SwaggerConfig.java
@RestController
@RequestMapping("/api/v1")

public class TutoriaController {

	@Autowired
	private TutoriaRepository tutoriaRepository;
	@GetMapping("/ Tutoria")
	@ApiOperation(value = "*** Service Method Get All  Tutoria ***", notes = "*** Get All  Tutoria from MongoDB\\\\WebApp ***")
	@ApiResponses(value = {@ApiResponse(code = 404, message = "*** Error Get All  Tutoria!!! ***")})
	public List<Tutoria> getTutoria() {
		return tutoriaRepository.findAll();
	}
	@PostMapping("/tutoria")
	public String saveTutoria(@RequestBody List<Tutoria>  tutoriaList) {
		tutoriaRepository.saveAll(tutoriaList);
		return "done";
	}
	
	//usuarios
	
	
	
	@PutMapping("/tutoria/{id}")
	public Tutoria putTutoria(@PathVariable String id, @RequestBody Tutoria tutoria){
		
		 Tutoria a= tutoriaRepository.findById(id).get();
		
	
		a.setDocente(tutoria.getDocente());
		a.setFecha_Y_Hora(tutoria.getFecha_Y_Hora());
		a.setTemas(tutoria.getTemas());
		a.setLugar(tutoria.getLugar());
		
		tutoriaRepository.save(a);
		return a;
	}
	
	

	@DeleteMapping("/tutoria/{id}")
	public  Tutoria deleteEstudianteById(@PathVariable String id) {
		 Tutoria b =  tutoriaRepository.findById(id).get();
		 tutoriaRepository.deleteById(id);
		 return b;
	}
	
	@DeleteMapping("/tutoriaList")
	public void deleteAll() {
		 tutoriaRepository.deleteAll();
	}
	
	

	
}