import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
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
  adminID: number;

  constructor(
    private fb: FormBuilder,
    private formationService: FormationHttpService,
    public dialog: MatDialog,
    private activeRoute: ActivatedRoute,
    private route: Router) {
    this.creationFormationForm = this.fb.group({
      titre: [''],
      description: ['']
    })
   }

  ngOnInit(): void {
    this.activeRoute.parent?.params.subscribe( params => {
      this.adminID = params['id'];
    });
  }

  onCreate(): void {
    this.formationNew = new FormationNew(
      this.creationFormationForm.value.titre,
      this.creationFormationForm.value.description);

      this.formationService.save(this.formationNew).subscribe(res => {
        if (res !== null) {
          const dialogConfirm = this.dialog.open(DialogConfirmationAjoutComponent);
          this.route.navigate([`/dashboard/${this.adminID}/formations`]);
          dialogConfirm.afterClosed().subscribe();

        }
      });
    
  }

 

}
