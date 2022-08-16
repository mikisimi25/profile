import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public items: MenuItem[] = [];
  public activeItem: MenuItem = {};
  public social: any[] = [];

  ngOnInit() {
      this.items = [
        {label: 'Sobre mi', icon: 'pi pi-fw pi-user', routerLink: ['']},
        {label: 'Proyectos', icon: 'pi pi-fw pi-briefcase', routerLink: ['/projects']},
        // {label: 'Blog', icon: 'pi pi-fw pi-bookmark-fill'},
        // {label: 'Colecciones', icon: 'pi pi-fw pi-folder-open'},
      ];

      this.social = [
        {label: 'Linkedin', icon: 'pi pi-fw pi-linkedin', href: 'https://www.linkedin.com/in/maksym-ostapenko-kulieba-798228210/'},
        {label: 'Github', icon: 'pi pi-fw pi-github', href: 'https://github.com/mikisimi25'}
      ]

      this.activeItem = this.items[0];
  }
}
