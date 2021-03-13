import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApprenantDemandeAuth } from 'src/app/models/ApprenantDemandeAuth';
import { ApprenantMessageAuth } from 'src/app/models/ApprenantMessageAuth';

import { AuthentificationApprenantHttpService } from 'src/app/services/authentification-apprenant-http.service';

@Component({
  selector: 'app-authentification-apprenant',
  templateUrl: './authentification-apprenant.component.html',
  styleUrls: ['./authentification-apprenant.component.css']
})
export class AuthentificationApprenantComponent implements OnInit {

 
  
  formGroup: FormGroup;
  

 

  constructor(private authentificationApprenantHttpService:AuthentificationApprenantHttpService,
              private formBuilder:FormBuilder,
              private router: Router) { 
  this.formGroup = this.formBuilder.group({
      email:[''],
      password:['']
    })
  }

  ngOnInit(): void {
    
  }
 

  loginProces(): void{
    if (this.formGroup.valid){
      this.authentificationApprenantHttpService
      .authentification(this.formGroup.value)
      .subscribe(res=>{
        if(res.isAuth == true){
          
          console.log(res)
          alert(res.message)
          
        }else{
          alert(res.message)
        }
        this.router.navigate(['formations'])
      })
    }
    
  }

  
  
}
