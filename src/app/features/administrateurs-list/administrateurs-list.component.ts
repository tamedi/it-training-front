import { Component, OnInit } from '@angular/core';
import { Administrateur } from 'src/app/models/Administrateur';
import { AdministrateurService } from 'src/app/services/administrateur.service';

@Component({
  selector: 'app-administrateurs-list',
  templateUrl: './administrateurs-list.component.html',
  styleUrls: ['./administrateurs-list.component.css']
})
export class AdministrateursListComponent implements OnInit {

  administrateurs: Administrateur[];
  tableColumns: string[] = ['nom', 'prenom', 'email', 'telephone', 'supprimer'];

  constructor(private administrateurService: AdministrateurService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.administrateurService.getAll().subscribe(res => {
    this.administrateurs = res;
    })
  }

  deleteAdmin(id: number) {
    this.administrateurService.deleteById(id).subscribe();   
    this.administrateurs = this.administrateurs.filter(item => item.id != id);
  }

}
