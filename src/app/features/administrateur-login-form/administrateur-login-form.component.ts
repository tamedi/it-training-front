import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-administrateur-login-form',
  templateUrl: './administrateur-login-form.component.html',
  styleUrls: ['./administrateur-login-form.component.css']
})
export class AdministrateurLoginFormComponent implements OnInit {

  loginForm: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: [''],
      password: ['']
    });
   }

  ngOnInit(): void {
  }

  connexion(): void {
    console.log(this.loginForm.value);
  }

}
