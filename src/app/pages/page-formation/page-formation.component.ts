import { Component, Input, OnInit } from '@angular/core';
import { Formation } from 'src/app/models/formation';
import { FormationHttpService } from 'src/app/services/formation-http.service';


@Component({
  selector: 'app-page-formation',
  templateUrl: './page-formation.component.html',
  styleUrls: ['./page-formation.component.css']
})
export class PageFormationComponent implements OnInit {

  @Input()formation: Formation =
  {
    id: 1,
    titre: "Toto aime Angular",
    description:"",
    themes: [],
    sessions: [
      {
        id: 1,
        numero: 1235498,
        date_debut: "25 juin 2020",
        date_fin: "30 juillet 2020",
        prix: "4055 €",
        lieu: "Chartres"
      },
      {
        id: 2,
        numero: 12354987,
        date_debut: "22 septembre 2020",
        date_fin: "28 juillet 2020",
        prix: "4055 €",
        lieu: "Marseilles"
      }
    ]
  }


  constructor(private formationhttpService: FormationHttpService) {
  }

  ngOnInit(): void {
    // this.formationhttpService.findById(this.formation.id).subscribe(res => {
    //   this.formation = res;
    // })
  }

}
