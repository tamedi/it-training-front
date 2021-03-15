import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Formation } from 'src/app/models/formation';
import { FormationNew } from 'src/app/models/FormationNew';
import { FormationHttpService } from 'src/app/services/formation-http.service';
import { DialogConfirmationAjoutComponent } from '../dialog-confirmation-ajout/dialog-confirmation-ajout.component';

@Component({
  selector: 'app-ajout-formation-form',
  templateUrl: './ajout-formation-form.component.html',
  styleUrls: ['./ajout-formation-form.component.css']
})
export class AjoutFormationFormComponent implements OnInit {

  creationFormationForm: FormGroup;
  formationNew: FormationNew;
  formation:Formation;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private formationService: FormationHttpService) {
    this.creationFormationForm = this.fb.group({
      titre: [''],
      description: ['']
    })
   }

  ngOnInit(): void {
  }

  onSubmit(): void {
  }

  onCreate(): void {
    this.formationNew = new FormationNew(
      this.creationFormationForm.value.titre,
      this.creationFormationForm.value.description);

      this.formationService.save(this.formationNew).subscribe(res => {
          console.log(res);
          if(this.formation != null) {
            const dialogConfirm = this.dialog.open(DialogConfirmationAjoutComponent);
            dialogConfirm.afterClosed().subscribe();
          }
      });
    
  }

 

}
