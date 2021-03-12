import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Session } from 'src/app/models/Session';
import { SessionNew } from '../models/SessionNew';

@Injectable({
  providedIn: 'root'
})
export class SessionHttpService {

  private baseUrl = 'http://localhost:9191/session';
  constructor(private httpClient: HttpClient) { }


  findAll(): Observable<Session[]> {
    return this.httpClient.get<Session[]>(`${this.baseUrl}`);
  }

  findById(id: number): Observable<Session> {
    return this.httpClient.get<Session>(`${this.baseUrl}/${id}`)
  }

  save(sessionNew: SessionNew): Observable<Session>  {
    return this.httpClient.post<Session>(`${this.baseUrl}`, sessionNew);
  }

  deleteById(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

  

}