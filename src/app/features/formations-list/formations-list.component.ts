import { Component, OnInit } from '@angular/core';
import { Formation } from 'src/app/models/formation';
import { FormationHttpService } from 'src/app/services/formation-http.service';

@Component({
  selector: 'app-formations-list',
  templateUrl: './formations-list.component.html',
  styleUrls: ['./formations-list.component.css']
})
export class FormationsListComponent implements OnInit {
  formations: Formation[];

  constructor(private formationService: FormationHttpService) { }

  tableColumns: string[] = ['titre', 'description', 'supprimer'];

  ngOnInit(): void {
    this.formationService.getFormationList().subscribe(res => {
      this.formations = res;
    })
  }

  deleteFormation(id: number) {
    console.log("suppression");
      this.formationService.deleteById(id).subscribe();
      window.location.reload();
    
  }

}
