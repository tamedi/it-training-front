import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Administrateur } from 'src/app/models/Administrateur';
import { AdministrateurNew } from 'src/app/models/AdministrateurNew';
import { AdministrateurService } from 'src/app/services/administrateur.service';
import { DialogConfirmationAjoutComponent } from '../dialog-confirmation-ajout/dialog-confirmation-ajout.component';

@Component({
  selector: 'app-ajout-administrateur-form',
  templateUrl: './ajout-administrateur-form.component.html',
  styleUrls: ['./ajout-administrateur-form.component.css']
})
export class AjoutAdministrateurFormComponent implements OnInit {

  creationAdminForm: FormGroup;
  administrateurNew: AdministrateurNew;
  administrateur:Administrateur;

  constructor(
    private fb: FormBuilder,
    private administrateurService: AdministrateurService,
    public dialog: MatDialog,
    private route: Router) {
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
          this.administrateur = res;

          if(this.administrateur != null) {
            const dialogConfirm = this.dialog.open(DialogConfirmationAjoutComponent);
            dialogConfirm.afterClosed().subscribe();
          }
      });


    
  }

}
