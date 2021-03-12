import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { Formation } from 'src/app/models/formation';
import { SessionNew } from 'src/app/models/SessionNew';
import { FormationHttpService } from 'src/app/services/formation-http.service';
import { SessionHttpService } from 'src/app/services/session-http.service';

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

  constructor(
    private fb: FormBuilder,
    private sessionService: SessionHttpService,
    private formationService: FormationHttpService) {
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

    this.sessionService.save(this.sessionNew).subscribe();
    this.creationSeesionForm.reset();   
  }

}
