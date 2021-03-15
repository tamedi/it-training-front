import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Formation } from 'src/app/models/formation';
import { FormationHttpService } from 'src/app/services/formation-http.service';
import { DialogSuppressionElementComponent } from '../dialog-suppression-element/dialog-suppression-element.component';

@Component({
  selector: 'app-formations-list',
  templateUrl: './formations-list.component.html',
  styleUrls: ['./formations-list.component.css']
})
export class FormationsListComponent implements OnInit {

  formations: Formation[];

  constructor(private formationService: FormationHttpService,
    public dialog: MatDialog) { }

  tableColumns: string[] = ['titre', 'description', 'supprimer'];

  ngOnInit(): void {
    this.formationService.getFormationList().subscribe(res => {
      this.formations = res;
    })
  }

  deleteFormation(id: number) {
    const dialogRef = this.dialog.open(DialogSuppressionElementComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.formationService.deleteById(id).subscribe();
        this.formations = this.formations.filter(item => item.id != id);
      }
    });
  }

}
