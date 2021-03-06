import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DemandeAuth } from 'src/app/models/DemandeAuth';
import { MessageAuth } from 'src/app/models/MessageAuth';
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
  messageAuth: MessageAuth;
  
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
    this.administrateurService.login(this.demandeAuth).subscribe(res => {
      this.messageAuth = new MessageAuth(res.adminId, res.message, res.isAuth); 
        if(res.isAuth == true) {
          this.router.navigate(['/dashboard']);
        } else {
          console.log(this.messageAuth);
        }
    })
  }

}
