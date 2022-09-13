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
        name: 'PROYECTS.MLDP.TITLE',
        description: 'PROYECTS.MLDP.DESCRIPTION',
        image: 'mldp',
        tags: ['Angular','Laravel','Redux','SCSS','PrimeNG','PrimeFlex'],
        link: 'https://mikisimi25.github.io/MLDP-frontend/'
      },
      {
        name: 'PROYECTS.AS.TITLE',
        description: 'PROYECTS.AS.DESCRIPTION',
        image: 'as',
        tags: ['HTML','CSS','Codegniter','PHP'],
        link: 'https://www.academiasantiago.com/'
      },
      {
        name: 'PROYECTS.KO.TITLE',
        description: 'PROYECTS.KO.DESCRIPTION',
        image: 'ko',
        tags: ['Wordpress'],
        link: 'https://kaleta-olejnik.es/'
      },
      {
        name: 'PROYECTS.DECOTEND.TITLE',
        description: 'PROYECTS.DECOTEND.DESCRIPTION',
        image: 'decotend',
        tags: ['Wordpress'],
        link: 'https://decotend.com/'
      }
    ]
  }



}
