import { Component, Input, OnInit } from '@angular/core';
import { Session } from 'src/app/models/Session';


@Component({
  selector: 'app-session-date-card',
  templateUrl: './session-date-card.component.html',
  styleUrls: ['./session-date-card.component.css']
})
export class SessionDateCardComponent implements OnInit {

@Input() session:Session;


  
  constructor() { }

  ngOnInit(): void {
  }

}
