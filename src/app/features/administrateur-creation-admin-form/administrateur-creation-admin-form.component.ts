import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-administrateur-creation-admin-form',
  templateUrl: './administrateur-creation-admin-form.component.html',
  styleUrls: ['./administrateur-creation-admin-form.component.css']
})
export class AdministrateurCreationAdminFormComponent implements OnInit {

  administrateurForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.administrateurForm = this.fb.group({
      nom: [''],
      prenom: [''],
      email: [''],
      telephone: [''],
      password: ['']
    })
  }

  ngOnInit(): void {
  }

  onCreate():void {
    console.log(this.administrateurForm.value);
  }

}
