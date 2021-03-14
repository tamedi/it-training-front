import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataTransfertService } from 'src/app/services/data-transfert.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  adminID: number;

  constructor(private route: ActivatedRoute, private dataTransert: DataTransfertService) {}

  ngOnInit(): void { 
    this.adminID = this.route.snapshot.params['id'];  
    this.shareData(this.adminID);
  }

  shareData(data:number) {
    this.dataTransert.sendData(data);
  }

}
