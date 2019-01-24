import { Component, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild('menuMob') menu: ElementRef;
  title = 'desafio';
  currentUrl = '';

  constructor(private router: Router) {

  router.events.subscribe(event => {
      if (event instanceof NavigationEnd ) {
        this.currentUrl = event.url;
      }
    });
  }

  openMenu() {
    console.log(this.menu.nativeElement.classList.toggle('d-block'));
  }
}
