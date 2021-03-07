import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formation } from '../models/formation';

@Injectable({
  providedIn: 'root'
})
export class FormationHttpService {

  private baseUrl = 'http://localhost:9191/formations'
  constructor(private httpClient:HttpClient) { }

  getFormationList(){
    return this.httpClient.get<Formation[]>(this.baseUrl)
  }
  findById(id:number){
    return this.httpClient.get<Formation>(`http://localhost:9191/formations/${id}`)
  }
}
