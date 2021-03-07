import { Event, Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Formation } from './models/formation';
import { Session } from './models/Session';
import { SessionHttpService } from './services/session-http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'it-training-front';
  showHeader:boolean;

  constructor(private router: Router){};

  ngOnInit() {
    this.router.events.subscribe(event => this.modifyHeader(event));
  }

  modifyHeader(location:any) {
    console.log(location.url)
    if(location.url == "/dashboard" ) { // === undefinned
      this.showHeader = false;
    } else  {
      this.showHeader = true;
    }
  }

}
