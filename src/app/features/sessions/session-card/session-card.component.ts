import { Component, Input, OnInit } from '@angular/core';
import { Session } from 'src/app/models/Session';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogComponent } from '../../tests/dialog/dialog.component';


@Component({
  selector: 'app-session-card',
  templateUrl: './session-card.component.html',
  styleUrls: ['./session-card.component.css']
})
export class SessionCardComponent implements OnInit {

  @Input() session:Session;

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
