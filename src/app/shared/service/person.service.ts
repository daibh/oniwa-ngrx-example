import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../model/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(
    private http: HttpClient
  ) { }

  fetchAll(): Observable<Person[]> {
    return this.http.get<Person[]>('/assets/data/person.json');
  }
  
}
