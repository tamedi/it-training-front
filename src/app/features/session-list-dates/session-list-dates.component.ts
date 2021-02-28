import { Component, OnInit } from '@angular/core';
import { Session } from 'src/app/models/Session';

@Component({
  selector: 'app-session-list-dates',
  templateUrl: './session-list-dates.component.html',
  styleUrls: ['./session-list-dates.component.css']
})
export class SessionListDatesComponent implements OnInit {

  sessions:Session[]=[]
  constructor() { }

  ngOnInit(): void {
  }

}
