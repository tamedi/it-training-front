import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/models/formation';
import { FormationHttpService } from 'src/app/services/formation-http.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  formations: Formation[] = [];
  constructor(private formationHttpservice: FormationHttpService) { }

  ngOnInit(): void {
    this.formationHttpservice.getFormationList().subscribe(res=>{
      this.formations = res;
    })
  }

  

}
