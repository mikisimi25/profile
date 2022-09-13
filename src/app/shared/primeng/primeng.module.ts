import { NgModule } from '@angular/core';
import {TabMenuModule} from 'primeng/tabmenu';
import {TimelineModule} from 'primeng/timeline';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import { TagModule } from 'primeng/tag';
import {MenubarModule} from 'primeng/menubar';
import {SelectButtonModule} from 'primeng/selectbutton';

@NgModule({
  exports: [
    TabMenuModule,
    TimelineModule,
    CardModule,
    ButtonModule,
    TagModule,
    MenubarModule,
    SelectButtonModule
  ]
})
export class PrimengModule { }
