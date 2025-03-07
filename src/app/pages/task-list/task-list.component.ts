import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from 'src/app/services/common.service';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskDataService, TaskProps } from 'src/app/services/task-data.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  taskList$: TaskProps[] = [];

  constructor(private commonService: CommonService, private dialog: MatDialog, private taskDataService: TaskDataService) { }

  ngOnInit(): void {
    this.getTaskList();
  }

  getTaskList() {
    this.taskDataService.taskList$.subscribe(data => {
      console.log(data);
      
      this.taskList$ = data;
    })
  }

  openNewTaskDialog() {
    const dialogRef = this.dialog.open(NewTaskComponent, {
      panelClass: ['modal-panel']
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.taskDataService.addTask({...result, finished: false})
      }
    })
  }
}
