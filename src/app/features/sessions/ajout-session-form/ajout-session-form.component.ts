import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from 'src/app/models/formation';
import { Session } from 'src/app/models/Session';
import { SessionNew } from 'src/app/models/SessionNew';
import { FormationHttpService } from 'src/app/services/formation-http.service';
import { SessionHttpService } from 'src/app/services/session-http.service';
import { DialogConfirmationAjoutComponent } from '../../dialog-confirmation-ajout/dialog-confirmation-ajout.component';

@Component({
  selector: 'app-ajout-session-form',
  templateUrl: './ajout-session-form.component.html',
  styleUrls: ['./ajout-session-form.component.css']
})
export class AjoutSessionFormComponent implements OnInit {

  creationSeesionForm: FormGroup;
  sessionNew: SessionNew;
  formationsList: Formation[];
  formationSelected:Formation;
  session: Session;
  adminID: number;

  constructor(
    private fb: FormBuilder,
    private sessionService: SessionHttpService,
    private formationService: FormationHttpService,
    public dialog: MatDialog,
    private activeRoute: ActivatedRoute,
    private route: Router) {
      this.creationSeesionForm = this.fb.group({
        dateDebut: ['', Validators.required],
        dateFin: ['', Validators.required],
        prix: ['', Validators.required],
        lieu: ['', Validators.required]
      });
     }

  ngOnInit(): void {
    this.formationService.getFormationList().subscribe(res => {
      this.formationsList = res;
    });

    this.activeRoute.parent?.params.subscribe( params => {
      this.adminID = params['id'];
    });
    
  }

  updateValueFormation(event: MatSelectChange) {
    this.formationSelected = event.value;
  }

  onCreate(): void {
    this.sessionNew = new SessionNew(
      this.creationSeesionForm.value.dateDebut,
      this.creationSeesionForm.value.dateFin,
      this.creationSeesionForm.value.prix,
      this.creationSeesionForm.value.lieu,
      this.formationSelected
    );

  
    this.sessionService.save(this.sessionNew).subscribe(res => {
      this.session = res;
      if (this.session !== null) {
        const dialogConfirm = this.dialog.open(DialogConfirmationAjoutComponent);
        this.route.navigate([`/dashboard/${this.adminID}/listeSessions`]);
        dialogConfirm.afterClosed().subscribe();
        
      }
    });
    this.creationSeesionForm.reset();   
  }

}
