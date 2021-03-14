import { Component } from '@angular/core';
<<<<<<< HEAD
import { Router, NavigationStart } from '@angular/router';
=======
import { Router, NavigationStart, RouterEvent, NavigationEnd } from '@angular/router';
>>>>>>> fatima

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'it-training-front';
  showHeader: boolean;

<<<<<<< HEAD
  constructor(private router: Router) { };
=======
  constructor(private router: Router) {}
>>>>>>> fatima

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        if (event['url'].startsWith("/dashboard") || event['url'] === "/login") {
          this.showHeader = false;
        } else {
          this.showHeader = true;
        }
<<<<<<< HEAD
      }
    });
  }
=======
      } 
    });
  }


>>>>>>> fatima
}
