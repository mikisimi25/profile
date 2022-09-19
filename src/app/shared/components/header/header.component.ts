import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
import { forkJoin, Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public items: MenuItem[] = [];
  public activeItem: MenuItem = {};
  public social: any[] = [];

  public languageSwitch: any[] = [];
  public languageCase: string = "es";


  constructor( private translate: TranslateService) {
    this.setLanguage();
  }

  ngOnInit() {
      this.menuItemsTranslate();

      this.social = [
        {label: 'CV', icon: 'pi pi-fw pi-external-link', href: ''},
        {label: 'Linkedin', icon: 'pi pi-fw pi-linkedin', href: 'https://www.linkedin.com/in/maksym-ostapenko-kulieba-798228210/'},
        {label: 'Github', icon: 'pi pi-fw pi-github', href: 'https://github.com/mikisimi25'}
      ]

      this.activeItem = this.items[0];

      this.languageSwitch = [{label: 'ES', value: 'es'}, {label: 'EN', value: 'en'}];
  }

  public useLanguage(): void {
    this.translate.use(this.languageCase);

    localStorage.setItem('lang', JSON.stringify(this.languageCase));

    this.menuItemsTranslate();
  }

  public setLanguage() {
    this.translate.setDefaultLang('es');

    let lang: string = JSON.parse(localStorage.getItem('lang')!);

    if(lang !== 'null') {

      switch( lang ) {

        case 'en':
          this.languageCase = 'en';
          this.translate.use('en');
          break;
      }
    }
  }

  public menuItemsTranslate() {
    forkJoin({
      ABOUT_ME: this.translate.get('HEADER.ABOUT_ME'),
      PROYECTS: this.translate.get('HEADER.PROYECTS'),
    }).subscribe(({ABOUT_ME, PROYECTS}) => {
      this.items = [
        {label: ABOUT_ME, icon: 'pi pi-fw pi-user', routerLink: ['']},
        {label: PROYECTS, icon: 'pi pi-fw pi-briefcase', routerLink: ['/projects']}
      ];

      if(this.languageCase === 'es') {
        this.social[0].href = 'assets/cv/MaksymOstapenkoCVes.pdf'
      } else {
        this.social[0].href = 'assets/cv/MaksymOstapenkoCVen.pdf'
      }
    });
  }
}
