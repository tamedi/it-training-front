import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Apprenant } from '../models/Apprenant';

@Injectable({
  providedIn: 'root'
})
export class ApprenantHttpService {

  private baseUrl = 'http://localhost:9191/apprenants'
  constructor(private httpClient:HttpClient) { }

  save(apprenant:Apprenant){
    return this.httpClient.post<Apprenant>(this.baseUrl,apprenant)
  }
}
