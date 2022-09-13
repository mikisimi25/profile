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

  ngOnInit() {
      this.timeline = [
          {
            status: 'ABOUT_ME.GSDAW_TITLE',
            date: '2020 - 2022',
            icon: PrimeIcons.BOOK,
            color: '#FFCA23',
            text: 'ABOUT_ME.GSDAW_DESCRIPTION'
          },
          {
            status: 'ABOUT_ME.DEKRA_TITLE',
            date: 'Marzo 2022 - Junio 2022',
            icon: PrimeIcons.BRIEFCASE,
            color: '#1F8A49',
            text: 'ABOUT_ME.DEKRA_DESCRITPION'
          },
      ];
  }

}
