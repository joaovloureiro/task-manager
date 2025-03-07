import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutBasicRoutingModule } from './layout-basic-routing.module';
import { LayoutBasicComponent } from './layout-basic.component';
import { TaskListComponent } from 'src/app/pages/task-list/task-list.component';
import { NewTaskComponent } from 'src/app/pages/task-list/new-task/new-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PriorityStatusPipe } from 'src/app/pipes/priority-status.pipe';


@NgModule({
  declarations: [LayoutBasicComponent, TaskListComponent, NewTaskComponent, PriorityStatusPipe ],
  imports: [
    CommonModule,
    LayoutBasicRoutingModule,ReactiveFormsModule
  ]
})
export class LayoutBasicModule { }
