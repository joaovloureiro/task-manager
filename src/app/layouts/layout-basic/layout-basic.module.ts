import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutBasicRoutingModule } from './layout-basic-routing.module';
import { LayoutBasicComponent } from './layout-basic.component';


@NgModule({
  declarations: [LayoutBasicComponent],
  imports: [
    CommonModule,
    LayoutBasicRoutingModule
  ]
})
export class LayoutBasicModule { }
