import { Component } from '@angular/core';
import { Router, NavigationStart, RouterEvent, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'it-training-front';
  showHeader: boolean;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        if (event['url'].startsWith("/dashboard") || event['url'] === "/login") {
          this.showHeader = false;
        } else {
          this.showHeader = true;
        }
      }
    });
  }


}
