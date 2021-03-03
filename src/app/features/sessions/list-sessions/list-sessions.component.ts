import { Component, Input, OnInit } from '@angular/core';
import { Formation } from 'src/app/models/formation';
import { Session } from 'src/app/models/Session';

@Component({
  selector: 'app-list-sessions',
  templateUrl: './list-sessions.component.html',
  styleUrls: ['./list-sessions.component.css']
})
export class ListSessionsComponent implements OnInit {

@Input() sessions:Session[]
// [
//   {
//       "id": 1,
//       "numero":1235498,
//       "date_debut": "22 juin 2020",
//       "date_fin": "28 juillet 2020",
//       "prix":"4055 €",
//       "lieu": "Paris"
//   },
//   {
//       "id": 2,
//       "numero":12354987,
//       "date_debut": "15 Octobre 2021",
//       "date_fin": "30 novembre 2021",
//       "prix":"4055 €",
//       "lieu": "Lyon"
//   }
// ]

  constructor() { }

  ngOnInit(): void {
  }

}
