import { Component, OnInit } from '@angular/core';
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
  tableColumns: string[] = ['formation', 'dateDebut', 'dateFin', 'lieu', 'prix'];
  idFormation:number;
  formations:Formation[];

  constructor(private sessionService:SessionHttpService,
              private formationService:FormationHttpService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.sessionService.findAll().subscribe(res => {
      this.sessions = res;
    });
  }

  loadFormations(sessions:Session[]) {
    sessions.map(item => {
      this.formationService.findById(item.id).subscribe(res => {
        this.formations.push(res);
      })
    });
  }

}
