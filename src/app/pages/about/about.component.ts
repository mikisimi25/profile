import { Component, OnInit } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { TimeLine } from '../../shared/models/timeline.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public timeline: TimeLine[] = [];
  public description: { text: String } = { text: '' };

  ngOnInit() {
      this.timeline = [
          {
            status: 'Grado Superior de Desarrollo de Aplicaciones web',
            date: '2020 - 2022',
            icon: PrimeIcons.BOOK,
            color: '#FFCA23',
            text: 'En el grado superior he desarrollado aplicaciones utilizando <b>Angular</b> como framework para forntend y <b>Laravel</b> como framework para el backend. A su vez he aprendido utilizar MySQL, Git y Github y Java.'
          },
          {
            status: 'Dekra T.C.',
            date: 'Marzo 2022 - Junio 2022',
            icon: PrimeIcons.BRIEFCASE,
            color: '#1F8A49',
            text: 'En Dekra mi puesto era de desarrollador Full Stack especializado en el desarrollo web. Mi funciones eran las siguientes:<br><br>1. Desarrollar y implementar mejoras en la aplicación web de la empresa.<br><br>2. Desarrollar nuevas aplicaciones internas de la empresa.<br><br> 3. También he estado desarrollando en equipo grandes proyectos.<br><br> En Dekra el software que he estado desarrollando fue con Angular, AngularJS, Java, SQL y a su vez se ha utilizado Jira para el control de tareas y Git para el control de versiones.'
          },
      ];

    this.description = {
      text: "Graduado en Desarrollo de Aplicaciones Web, con un gran interés en la programación, en aprender nuevas tecnoligías y perfeccionar las ya aprendidas. Con capacidad para aprender y aplicar mis conocimientos al ámbito profesional. En busca de una oportunidad laboral en la que desarrollar mis habilidades y adquirir experiencia."
    }
  }

}
