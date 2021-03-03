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
  
  ngOnInit(){
  }
}
