import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Formation } from 'src/app/models/formation';
import { Session } from 'src/app/models/Session';
import { FormationHttpService } from 'src/app/services/formation-http.service';
import { SessionHttpService } from 'src/app/services/session-http.service';
import { DialogSuppressionElementComponent } from '../../dialog-suppression-element/dialog-suppression-element.component';

@Component({
  selector: 'app-list-sessions-dashboard',
  templateUrl: './list-sessions-dashboard.component.html',
  styleUrls: ['./list-sessions-dashboard.component.css']
})
export class ListSessionsDashboardComponent implements OnInit {

  sessions: Session[];
  tableColumns: string[] = ['formation', 'dateDebut', 'dateFin', 'lieu', 'prix', 'supprimer'];


  constructor(
    private sessionService: SessionHttpService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadSessions();
  }

  loadSessions() {
    this.sessionService.findAll().subscribe(res => {
      this.sessions = res;
    });
  }


  deleteSession(id: number) {
    const dialogRef = this.dialog.open(DialogSuppressionElementComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.sessionService.deleteById(id).subscribe(res => console.log(res));
        this.sessions = this.sessions.filter(item => item.id != id);
      }
    });
  }

}