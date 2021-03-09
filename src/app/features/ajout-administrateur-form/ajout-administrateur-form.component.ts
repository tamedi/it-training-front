import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdministrateurNew } from 'src/app/models/AdministrateurNew';
import { AdministrateurService } from 'src/app/services/administrateur.service';

@Component({
  selector: 'app-ajout-administrateur-form',
  templateUrl: './ajout-administrateur-form.component.html',
  styleUrls: ['./ajout-administrateur-form.component.css']
})
export class AjoutAdministrateurFormComponent implements OnInit {

  creationAdminForm: FormGroup;
  administrateurNew: AdministrateurNew;

  constructor(
    private fb: FormBuilder,
    private administrateurService: AdministrateurService) {
    this.creationAdminForm = this.fb.group({
      nom: [''],
      prenom: [''],
      email: [''],
      telephone: [''],
      password: ['']
    })
   }

  ngOnInit(): void {
  }

  onCreate(): void {
    this.administrateurNew = new AdministrateurNew(
      this.creationAdminForm.value.nom,
      this.creationAdminForm.value.prenom,
      this.creationAdminForm.value.email,
      this.creationAdminForm.value.telephone,
      this.creationAdminForm.value.password);

      this.administrateurService.save(this.administrateurNew).subscribe(res => {
          console.log(res);
      });
    
  }

}
