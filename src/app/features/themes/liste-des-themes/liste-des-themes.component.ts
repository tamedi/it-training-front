import { Component, Input, OnInit } from '@angular/core';
import { Formation } from 'src/app/models/formation';
import { FormationByIdComponent } from '../../formations/formation-by-id/formation-by-id.component';

@Component({
  selector: 'app-liste-des-themes',
  templateUrl: './liste-des-themes.component.html',
  styleUrls: ['./liste-des-themes.component.css']
})
export class ListeDesThemesComponent implements OnInit {

  constructor() { }

  @Input() public theme:Formation;

  ngOnInit(): void {
  }

}
