import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Administrateur } from 'src/app/models/Administrateur';
import { AdministrateurService } from 'src/app/services/administrateur.service';
import { DataTransfertService } from 'src/app/services/data-transfert.service';

@Component({
  selector: 'app-administrateur-profil',
  templateUrl: './administrateur-profil.component.html',
  styleUrls: ['./administrateur-profil.component.css']
})
export class AdministrateurProfilComponent implements OnInit {

  administrateur: Administrateur;
  adminID: number;

  constructor(private dataTransert: DataTransfertService, private adminService: AdministrateurService) { 
  }

  ngOnInit(): void {

    this.dataTransert.currentInfo.subscribe(res => {
      this.adminID = res;
    })

    this.adminService.findById(this.adminID).subscribe(res => {
      this.administrateur = res;
    })
  }

}
