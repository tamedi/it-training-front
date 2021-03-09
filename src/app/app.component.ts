import { Component } from '@angular/core';
import { Router, NavigationStart  } from '@angular/router';

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
    this.router.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        this.modifyHeader(event.url)
      }
    });
  }

  modifyHeader(url:string) {
    if(url == "/" || url == "/formations") {
      this.showHeader = true;
    } else {
      this.showHeader = false;
    }
  }

}
