import { Component, OnInit } from '@angular/core';
import { AdministrateurService } from 'src/app/services/administrateur.service';
import { FormationHttpService } from 'src/app/services/formation-http.service';
import { SessionHttpService } from 'src/app/services/session-http.service';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent implements OnInit {

  nombreAdministrateurs:number;
  nombreFormations:number;
  nombreSessions:number;

  constructor(private adminService: AdministrateurService,
                private formationService: FormationHttpService,
                private sessionService: SessionHttpService) { }

  ngOnInit(): void {
      this.getAdmin();
      this.getFormations();
      this.getSessions();
  }

  getAdmin() {
      this.adminService.getAll().subscribe(res => {
          this.nombreAdministrateurs = res.length;
      });
  }

  getFormations() {
      this.formationService.getFormationList().subscribe(res => {
        this.nombreFormations = res.length;
      });
  }

  getSessions() {
      this.sessionService.findAll().subscribe(res => {
          this.nombreSessions = res.length;
      })
  }

}
