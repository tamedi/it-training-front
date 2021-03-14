import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApprenantHttpService } from 'src/app/services/apprenant-http.service';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  apprenantProfile: FormGroup;
  apprenant:any={}

  constructor(
              private formBuilder:FormBuilder,
              private apprenantHttpService:ApprenantHttpService,
              public dialogRef: MatDialogRef<DialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData,
              private router:Router) {
                this.apprenantProfile = this.formBuilder.group({
                  nom:[''],
                  prenom:[''],
                  adresse:[''],
                  tel:[''],
                  email:[''],
                  password:['']
                })
              }

  onNoClick(): void {
    this.apprenantHttpService
        .save(this.apprenantProfile.value)
        .subscribe(res => {
          console.log(res)
          alert("votre inscriptiona été prise en compte, veuillez vous connecter")
          this.apprenant = Object.assign(this.apprenant, this.apprenantProfile.value)
          localStorage.setItem('Apprenants', JSON.stringify(this.apprenant))
          // window.location.reload();
         
          
        })
    alert("félicitation, vous êtes bien inscrit, cliquez sur OK pour retourner à l'accueil ")
    this.dialogRef.close();
    this.router.navigate(['formations'])
    
  }

  ngOnInit(): void {
  }

}
