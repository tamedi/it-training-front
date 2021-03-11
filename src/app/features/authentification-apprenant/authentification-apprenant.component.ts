import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-authentification-apprenant',
  templateUrl: './authentification-apprenant.component.html',
  styleUrls: ['./authentification-apprenant.component.css']
})
export class AuthentificationApprenantComponent implements OnInit {

  apprenantAuthentification: FormGroup;

  constructor(private formBuilder:FormBuilder) { 
    this.apprenantAuthentification = this.formBuilder.group({
      email:[''],
      password:['']
    })
  }

  ngOnInit(): void {
  }

}
