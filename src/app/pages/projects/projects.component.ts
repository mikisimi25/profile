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
        name: 'Mi lista de películas',
        description: 'Hoy en día existen innumerables fuentes de entretenimiento como películas y series,  “Mi Lista De Películas” es una aplicación web que permite al usuario explorar las películas o series que son populares en este momento, ver sus datos, etc… También si el usuario quiere organizar el contenido que está consumiendo lo puedo hacer creando listas, como por ejemplo, listas de películas favoritas.',
        image: 'mldp',
        tags: ['Angular','Laravel','Redux','SCSS','PrimeNG','PrimeFlex'],
        link: 'https://mikisimi25.github.io/MLDP-frontend/'
      },
      {
        name: 'Kaleta Olejnik',
        description: 'Esta página web es una tienda online. Pertence a un distribuidor de maquinaria y herramientas de albañil.',
        image: 'ko',
        tags: ['Wordpress'],
        link: 'https://kaleta-olejnik.es/'
      },
      {
        name: 'Decotend',
        description: 'Esta página es una landing page de una empresa de construcción de La Costa del Sol.',
        image: 'decotend',
        tags: ['Wordpress'],
        link: 'https://decotend.com/'
      }
    ]
  }



}
