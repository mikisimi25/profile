import { NgModule } from '@angular/core';
import {TabMenuModule} from 'primeng/tabmenu';
import {TimelineModule} from 'primeng/timeline';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';

@NgModule({
  exports: [
    TabMenuModule,
    TimelineModule,
    CardModule,
    ButtonModule
  ]
})
export class PrimengModule { }
