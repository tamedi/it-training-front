import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-boutton',
  templateUrl: './boutton.component.html',
  styleUrls: ['./boutton.component.css']
})
export class BouttonComponent implements OnInit {
  
  constructor(public dialog: MatDialog, private router:Router) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '500px',
      height:'500px'
      
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
    
    
  }

  ngOnInit(): void {
  }

}
