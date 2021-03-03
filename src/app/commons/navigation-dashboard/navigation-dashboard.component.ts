import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-dashboard',
  templateUrl: './navigation-dashboard.component.html',
  styleUrls: ['./navigation-dashboard.component.css']
})
export class NavigationDashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
