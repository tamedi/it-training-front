import { Component, Input } from '@angular/core';
import { Event, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
