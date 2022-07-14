import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  navbarActive = false;

  constructor(
    public translate: TranslateService,
    private router: Router
  ) {
    translate.addLangs(['th', 'en']);
    translate.setDefaultLang('th');
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) { return; }
      window.scrollTo(0, 0)
    });
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const navBrand = document.getElementsByClassName('navbar-brand') as HTMLCollectionOf<HTMLElement>;
    const navLink = Array.from(document.getElementsByClassName('nav-link') as HTMLCollectionOf<HTMLElement>);
    if (window.scrollY >= 25) {
      this.navbarActive = true;
      navBrand[0].style.setProperty('color', 'black');
      navLink.forEach((row) => { row.style.setProperty('color', 'black'); });
    } else {
      this.navbarActive = false;
      navBrand[0].style.setProperty('color', 'white');
      navLink.forEach((row) => { row.style.setProperty('color', 'white'); });
    }
  }
}
