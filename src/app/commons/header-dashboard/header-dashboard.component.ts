import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AdministrateurLoginFormComponent } from 'src/app/features/administrateur-login-form/administrateur-login-form.component';
import { Administrateur } from 'src/app/models/Administrateur';
import { MessageAuth } from 'src/app/models/MessageAuth';
import { AdministrateurService } from 'src/app/services/administrateur.service';
import { DataTransfertService } from 'src/app/services/data-transfert.service';

@Component({
  selector: 'app-header-dashboard',
  templateUrl: './header-dashboard.component.html',
  styleUrls: ['./header-dashboard.component.css']
})
export class HeaderDashboardComponent implements OnInit {

  adminID: number;
  administrateur: Administrateur;

  constructor(private dataTransert: DataTransfertService, private adminSevice: AdministrateurService) { }

  ngOnInit(): void {
    this.dataTransert.currentInfo.subscribe(res => {
      this.adminID = res;
    });

      this.adminSevice.findById(this.adminID).subscribe(res => {
      this.administrateur = res;
    });

  }

}
