import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Apprenant } from 'src/app/models/Apprenant';
import { ApprenantHttpService } from 'src/app/services/apprenant-http.service';

@Component({
  selector: 'app-formulaire-inscription-apprenant',
  templateUrl: './formulaire-inscription-apprenant.component.html',
  styleUrls: ['./formulaire-inscription-apprenant.component.css']
})
export class FormulaireInscriptionApprenantComponent implements OnInit {

  apprenantProfile: FormGroup;
  apprenants:Apprenant

  constructor(private formBuilder:FormBuilder,
              private apprenantHttpService:ApprenantHttpService) { 

    this.apprenantProfile = this.formBuilder.group({
      nom:[''],
      prenom:[''],
      adresse:[''],
      tel:[''],
      email:[''],
      password:['']
    })
  }
  onSubmit(){
    this.apprenantHttpService
        .save(this.apprenantProfile.value)
        .subscribe(res => {
          console.log(res)
        })
    
  }

  ngOnInit(): void {
  }

}
