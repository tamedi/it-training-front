import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DemandeAuth } from 'src/app/models/DemandeAuth';
import { AdministrateurService } from 'src/app/services/administrateur.service';

@Component({
  selector: 'app-administrateur-login-form',
  templateUrl: './administrateur-login-form.component.html',
  styleUrls: ['./administrateur-login-form.component.css']
})
export class AdministrateurLoginFormComponent implements OnInit {

  loginForm: FormGroup;
  idAdmi: number;
  demandeAuth: DemandeAuth;
  
  constructor(
    private fb: FormBuilder, 
    private administrateurService: AdministrateurService,
    private router: Router) {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });
   }

  ngOnInit(): void {
  }

  

  connexion(): void {
    this.demandeAuth = new DemandeAuth(this.loginForm.value.email, this.loginForm.value.password);
    if(this.loginForm.value.idAdmin === true){
      this.router.navigate(['/dashboard']);
    }
  }

}
