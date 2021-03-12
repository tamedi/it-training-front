import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Formation } from 'src/app/models/formation';
import { Session } from 'src/app/models/Session';
import { FormationHttpService } from 'src/app/services/formation-http.service';
import { SessionHttpService } from 'src/app/services/session-http.service';

@Component({
  selector: 'app-list-sessions-dashboard',
  templateUrl: './list-sessions-dashboard.component.html',
  styleUrls: ['./list-sessions-dashboard.component.css']
})
export class ListSessionsDashboardComponent implements OnInit {

  sessions: Session[];
  tableColumns: string[] = ['formation', 'dateDebut', 'dateFin', 'lieu', 'prix', 'supprimer'];
  

  constructor(private sessionService: SessionHttpService) { }

  ngOnInit(): void {
    this.loadSessions();
  }

  loadSessions() {
    this.sessionService.findAll().subscribe(res => {
      this.sessions = res;
    });
  }
 

  deleteSession(id:number) {
    this.sessionService.deleteById(id).subscribe(res => console.log(res));   
    this.sessions = this.sessions.filter(item => item.id != id);
  }

}