import { Component, OnInit } from '@angular/core';
import { Administrateur } from 'src/app/models/Administrateur';
import { AdministrateurNew } from 'src/app/models/AdministrateurNew';
import { AdministrateurService } from 'src/app/services/administrateur.service';

@Component({
  selector: 'app-administrateurs-list',
  templateUrl: './administrateurs-list.component.html',
  styleUrls: ['./administrateurs-list.component.css']
})
export class AdministrateursListComponent implements OnInit {

  administrateurs: Administrateur[];

  constructor(private administrateurService: AdministrateurService) { }

  tableColumns: string[] = ['nom', 'prenom', 'email', 'telephone', 'supprimer'];

  ngOnInit(): void {
    this.administrateurService.getAll().subscribe(res => {
      this.administrateurs = res;
    })
  }

  deleteAdmin(id:number) {
      this.administrateurService.delete(id).subscribe(res => {
        console.log(res);
    });
  }

}
