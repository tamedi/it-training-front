import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApprenantDemandeAuth } from '../models/ApprenantDemandeAuth';
import { ApprenantMessageAuth } from '../models/ApprenantMessageAuth';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationApprenantHttpService {

  private baseUrl = 'http://localhost:9191/apprenants/signin'
  constructor(private httpClient:HttpClient) { }
  authentification(apprenantMessageAuth: ApprenantMessageAuth){
    return this.httpClient.post<ApprenantMessageAuth>(this.baseUrl,apprenantMessageAuth)
  }
}
