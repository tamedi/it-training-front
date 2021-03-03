import { Component, Input, OnInit } from '@angular/core';
import { Session } from 'src/app/models/Session';
import { SessionHttpService } from 'src/app/services/session-http.service';

@Component({
  selector: 'app-session-card',
  templateUrl: './session-card.component.html',
  styleUrls: ['./session-card.component.css']
})
export class SessionCardComponent implements OnInit {

  @Input() session:Session;
  // ={
  //       "id": 1,
  //       "numero":1235498,
  //       "date_debut": "22 juin 2020",
  //       "date_fin": "28 juillet 2020",
  //       "prix":"4055 €",
  //       "lieu": "Paris"
  //   };
    

  constructor() { }

  ngOnInit(): void {
  }


  // calculDuree(): number {
  //   var dateDebut = new Date(this.session.date_debut);
  //   var dateFin = new Date(this.session.date_fin);
  //   var calcul = dateFin.getTime() - dateDebut.getTime();
  //   var duree = calcul / (1000 * 3600 * 24);
  //   return duree
  // }


}
