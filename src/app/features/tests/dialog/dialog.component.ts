import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

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

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private router:Router) {}

  onNoClick(): void {
    alert("félicitation, vous êtes bien inscrit, cliquez sur OK pour retourner à l'accueil ")
    this.dialogRef.close();
    this.router.navigate(['formations'])
    
  }

  ngOnInit(): void {
  }

}
