import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DemandeAuth } from '../models/DemandeAuth';
import { MessageAuth } from '../models/MessageAuth';

@Injectable({
  providedIn: 'root'
})
export class AdministrateurService {

  private baseUrl = 'http://localhost:9191/';
  constructor(private httpClient:HttpClient) { }

  login(demandeAuth:DemandeAuth) {
    return this.httpClient.post<MessageAuth>(`${this.baseUrl}/administrateurs`,demandeAuth);
  }
}
