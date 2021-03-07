import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageAuth } from 'src/app/models/MessageAuth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  messageAuth: MessageAuth;

  constructor(private activatedRoute:ActivatedRoute) {
    this.messageAuth = this.activatedRoute.snapshot.params.id;
    console.log(this.messageAuth)
   }

  ngOnInit(): void {
  }

}
