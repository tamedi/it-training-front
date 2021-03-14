import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Apprenant } from 'src/app/models/Apprenant';
import { ApprenantHttpService } from 'src/app/services/apprenant-http.service';

@Component({
  selector: 'app-formulaire-inscription-apprenant',
  templateUrl: './formulaire-inscription-apprenant.component.html',
  styleUrls: ['./formulaire-inscription-apprenant.component.css']
})
export class FormulaireInscriptionApprenantComponent implements OnInit {

  apprenantProfile: FormGroup;
  apprenant:any={}

  constructor(private formBuilder:FormBuilder,
              private apprenantHttpService:ApprenantHttpService,
              private router:Router) { 

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
          alert("votre inscriptiona été prise en compte, veuillez vous connecter")
          this.apprenant = Object.assign(this.apprenant, this.apprenantProfile.value)
          localStorage.setItem('Apprenants', JSON.stringify(this.apprenant))
          // window.location.reload();
         
          this.router.navigate(['authentification'])
        })
        
  }

  

  ngOnInit(): void {
  }

}
