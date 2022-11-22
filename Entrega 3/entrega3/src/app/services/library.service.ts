import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutoria } from '../model/tutoria';

const baseUrl = 'http://localhost:8080/api/v1/tutoria';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Tutoria []> {
    return this.http.get<Tutoria []>(baseUrl);
  }

  get(id: String): Observable<Tutoria > {
    return this.http.get<Tutoria >(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: string, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByAuthor(author:string): Observable<any> {
    return this.http.get(`${baseUrl}?author=${author}`);
  }
}


