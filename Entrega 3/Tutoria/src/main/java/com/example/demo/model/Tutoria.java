package com.example.demo.model;


import java.sql.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;



@Document(collection = "estudianteslist")
public class Tutoria {
	
	 @Id
	private String id;
	private String docente;
	private String Fecha_Y_Hora;
	private String Temas;
	@Field("Ubicacion")
	private List<Ubicacion> lugar;

	public Tutoria() {
	}
	public Tutoria(String id, String docente,String Fecha_Y_Hora,String Temas, List<Ubicacion> lugar) {

		super();
		this.id = id;
		this.docente=docente;
		this.Fecha_Y_Hora=Fecha_Y_Hora;
		this.Temas=Temas;
		this.lugar=lugar;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getDocente() {
		return docente;
	}
	public void setDocente(String docente) {
		this.docente = docente;
	}
	public String getFecha_Y_Hora() {
		return Fecha_Y_Hora;
	}
	public void setFecha_Y_Hora(String fecha_Y_Hora) {
		Fecha_Y_Hora = fecha_Y_Hora;
	}
	public String getTemas() {
		return Temas;
	}
	public void setTemas(String temas) {
		Temas = temas;
	}
	public List<Ubicacion> getLugar() {
		return lugar;
	}
	public void setLugar(List<Ubicacion> lugar) {
		this.lugar = lugar;
	}
	
	
	
}