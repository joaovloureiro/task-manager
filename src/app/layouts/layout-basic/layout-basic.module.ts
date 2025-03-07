import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutBasicRoutingModule } from './layout-basic-routing.module';
import { LayoutBasicComponent } from './layout-basic.component';
import { TaskListComponent } from 'src/app/pages/task-list/task-list.component';


@NgModule({
  declarations: [LayoutBasicComponent, TaskListComponent],
  imports: [
    CommonModule,
    LayoutBasicRoutingModule
  ]
})
export class LayoutBasicModule { }
