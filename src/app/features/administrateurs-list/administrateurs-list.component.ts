import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Administrateur } from 'src/app/models/Administrateur';
import { AdministrateurService } from 'src/app/services/administrateur.service';
import { DialogSuppressionElementComponent } from '../dialog-suppression-element/dialog-suppression-element.component';


@Component({
  selector: 'app-administrateurs-list',
  templateUrl: './administrateurs-list.component.html',
  styleUrls: ['./administrateurs-list.component.css']
})
export class AdministrateursListComponent implements OnInit {

  administrateurs: Administrateur[];
  tableColumns: string[] = ['nom', 'prenom', 'email', 'telephone', 'supprimer'];

  constructor(private administrateurService: AdministrateurService, 
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.loadData();
  }

<<<<<<< HEAD
  deleteAdmin(administrateur: Administrateur) {
      this.administrateurService.delete(administrateur).subscribe();
      window.location.reload();
    
=======
  loadData() {
    this.administrateurService.getAll().subscribe(res => {
    this.administrateurs = res;
    });
  }  

  deleteAdmin(id: number) {
    const dialogRef = this.dialog.open(DialogSuppressionElementComponent);

    dialogRef.afterClosed().subscribe(result => {
       if(result=== true) {
        this.administrateurService.deleteById(id).subscribe();   
        this.administrateurs = this.administrateurs.filter(item => item.id != id);
       }
    });
>>>>>>> fatima
  }

}
