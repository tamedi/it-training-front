import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DemandeAuth } from '../models/DemandeAuth';
import { MessageAuth } from '../models/MessageAuth';

@Injectable({
  providedIn: 'root'
})
export class AdministrateurService {

  private baseUrl = 'http://localhost:9191/administrateurs';
  
  constructor(private httpClient:HttpClient) { }

  login(demandeAuth:DemandeAuth): Observable<MessageAuth> {
    return this.httpClient.post<MessageAuth>(`${this.baseUrl}/login`, demandeAuth);
  }
}
