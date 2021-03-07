import { Component, Input, OnInit } from '@angular/core';
import { Session } from 'src/app/models/Session';

@Component({
  selector: 'app-list-sessions',
  templateUrl: './list-sessions.component.html',
  styleUrls: ['./list-sessions.component.css']
})
export class ListSessionsComponent implements OnInit {

@Input() sessions:Session[]

  constructor() { }

  ngOnInit(): void {
  }

}
