import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
  public items: MenuItem[] = [];
  public activeItem: MenuItem = {};

  ngOnInit() {
      this.items = [
          {label: 'Sobre mi', icon: 'pi pi-fw pi-user', routerLink: ['']},
          {label: 'Proyectos', icon: 'pi pi-fw pi-briefcase', routerLink: ['/projects']},
          // {label: 'Blog', icon: 'pi pi-fw pi-bookmark-fill'},
          // {label: 'Colecciones', icon: 'pi pi-fw pi-folder-open'},
      ];

      this.activeItem = this.items[0];
  }
}
