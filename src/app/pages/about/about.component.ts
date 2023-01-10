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
          status: 'ABOUT_ME.SOLERA.TITLE',
          date: 'ABOUT_ME.SOLERA.DATE',
          icon: PrimeIcons.BRIEFCASE,
          color: '#562B79',
          text: 'ABOUT_ME.SOLERA.DESCRIPTION'
        },
        {
          status: 'ABOUT_ME.DEKRA.TITLE',
          date: 'ABOUT_ME.DEKRA.DATE',
          icon: PrimeIcons.BRIEFCASE,
          color: '#1F8A49',
          text: 'ABOUT_ME.DEKRA.DESCRIPTION'
        },
          {
            status: 'ABOUT_ME.GSDAW.TITLE',
            date: 'ABOUT_ME.GSDAW.DATE',
            icon: PrimeIcons.BOOK,
            color: '#FFCA23',
            text: 'ABOUT_ME.GSDAW.DESCRIPTION'
          },
      ];
  }

}
