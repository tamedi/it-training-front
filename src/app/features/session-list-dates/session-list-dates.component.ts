import { Component, OnInit } from '@angular/core';
import { Session } from 'src/app/models/Session';
import { SessionHttpService } from 'src/app/services/session-http.service';

@Component({
  selector: 'app-session-list-dates',
  templateUrl: './session-list-dates.component.html',
  styleUrls: ['./session-list-dates.component.css']
})
export class SessionListDatesComponent implements OnInit {

  sessions:Session[]=[]
  constructor(private sessionhttpservice:SessionHttpService) { }

  ngOnInit(): void {
    this.sessionhttpservice.findAll().subscribe(res =>{
      this.sessions=res;
    })
  }

}
