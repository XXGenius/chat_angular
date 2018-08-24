import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  routeSubscription;
  routerSubscription;

  constructor(private router: Router) {
    this.hideMfromUrl();
  }

  hideMfromUrl() {
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const url = window.location.href.replace(window.location.origin, '');
        const urlArray = url.split('/');
        const urlWithMBool = urlArray.length > 1 && urlArray[1] === 'm';
        if (urlWithMBool) {
          window.history.pushState('', '', url.slice(2));
        }
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
    this.routeSubscription.unsubscribe();
  }
}
