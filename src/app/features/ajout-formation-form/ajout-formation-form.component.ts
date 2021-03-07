import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ajout-formation-form',
  templateUrl: './ajout-formation-form.component.html',
  styleUrls: ['./ajout-formation-form.component.css']
})
export class AjoutFormationFormComponent implements OnInit {

  formationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formationForm = this.fb.group({
      titre: [''],
      prix: [''],
      nombreParticipants: ['']
    });
   }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.formationForm.value);
  }

}
