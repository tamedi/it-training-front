import { Component, Input, OnInit } from '@angular/core';
import { Session } from 'src/app/models/Session';

@Component({
  selector: 'app-session-card',
  templateUrl: './session-card.component.html',
  styleUrls: ['./session-card.component.css']
})
export class SessionCardComponent implements OnInit {

  @Input() session:Session;

  constructor() { }

  ngOnInit(): void {
  }

}
