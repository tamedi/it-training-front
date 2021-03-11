import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Session } from 'src/app/models/Session';
import { SessionNew } from '../models/SessionNew';

@Injectable({
  providedIn: 'root'
})
export class SessionHttpService {

  constructor(private httpClient: HttpClient) { }


  findAll() {
    return this.httpClient.get<Session[]>('http://localhost:9191/session')
  }

  findById(id: number) {
    return this.httpClient.get<Session>(`http://localhost:9191/session/${id}`)
  }

  save(sessionNew: SessionNew): Observable<Session>  {
    return this.httpClient.post<Session>(`http://localhost:9191/session`, sessionNew);
  }

  

}