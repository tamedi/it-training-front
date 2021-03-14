import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Formation } from 'src/app/models/formation';
import { Session } from 'src/app/models/Session';
import { FormationHttpService } from 'src/app/services/formation-http.service';
import { SessionHttpService } from 'src/app/services/session-http.service';


@Component({
  selector: 'app-page-formation',
  templateUrl: './page-formation.component.html',
  styleUrls: ['./page-formation.component.css']
})
export class PageFormationComponent implements OnInit {

  id: number;
  formation: Formation;
  sessions: Session[];

  constructor(private formationHttpservice: FormationHttpService, private SessionHttpService: SessionHttpService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    //this.sessions = this.formation.sessions;
    this.id = this.route.snapshot.params['id'];

    this.formationHttpservice.findById(this.id).subscribe(data => {
      this.formation = data;
    })

    this.SessionHttpService.findByFormationId(this.id).subscribe(data => {
      this.sessions = data;
    }, error => console.log(error)
    )
  }

}
