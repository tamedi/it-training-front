import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrateur } from '../models/Administrateur';
import { AdministrateurNew } from '../models/AdministrateurNew';
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

  save(administrateur:AdministrateurNew): Observable<Administrateur> {
    return this.httpClient.post<Administrateur>(`${this.baseUrl}/ajout`, administrateur);
  }

  getAll(): Observable<Administrateur[]> {
    return this.httpClient.get<Administrateur[]>(`${this.baseUrl}`);
  }

  update(administrateurNew:AdministrateurNew, id:number): Observable<Administrateur> {
    return this.httpClient.put<Administrateur>(`${this.baseUrl}/editer/${id}`, administrateurNew);
  }

  deleteById(id:number){
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }

}
