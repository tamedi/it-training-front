import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Session } from 'src/app/models/Session';

@Injectable({
  providedIn: 'root'
})
export class SessionHttpService {

  constructor(private httpClient: HttpClient) { }


  findAll() {
    return this.httpClient.get<Session[]>('http://localhost:3000/session')
  }

  findById(id: number) {
    return this.httpClient.get<Session>(`http://localhost:3000/session/${id}`)
  }

  

}