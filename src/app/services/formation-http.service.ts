import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Formation } from '../models/formation';
import { FormationNew } from '../models/FormationNew';

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
   save(formation:FormationNew){
     return this.httpClient.post<Formation>(this.baseUrl, formation);
  }

  deleteById(id:number){
    console.log("suppression");
    return this.httpClient.delete(`http://localhost:9191/formations/${id}`);
  }


    

  // searchFormations(titre:string){
  //   return this.httpClient.get<Formation>(`http://localhost:9191/formations/titre/${titre}`)
  // }

}
