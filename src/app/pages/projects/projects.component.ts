import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  public projects: any = [];

  constructor() { }

  ngOnInit(): void {
    this.projects = [
      {
        name: 'PROYECTS.MLDP_TITLE',
        description: 'PROYECTS.MLDP_DESCRIPTION',
        image: 'mldp',
        tags: ['Angular','Laravel','Redux','SCSS','PrimeNG','PrimeFlex'],
        link: 'https://mikisimi25.github.io/MLDP-frontend/'
      },
      {
        name: 'PROYECTS.KO_TITLE',
        description: 'PROYECTS.KO_DESCRIPTION',
        image: 'ko',
        tags: ['Wordpress'],
        link: 'https://kaleta-olejnik.es/'
      },
      {
        name: 'PROYECTS.DECOTEND_TITLE',
        description: 'PROYECTS.DECOTEND_DESCRIPTION',
        image: 'decotend',
        tags: ['Wordpress'],
        link: 'https://decotend.com/'
      }
    ]
  }



}
