import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonService } from 'src/app/services/common.service';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskDataService } from 'src/app/services/task-data.service';
import { ConfirmModalComponent } from 'src/app/components/confirm-modal/confirm-modal.component';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  taskList$ = this.taskDataService.taskList$;
  trashIcon = '../../../assets/img/trash.svg';
  filterButtonLabel: string = 'Filter';
  activeFilter: boolean = false;

  constructor(
    private commonService: CommonService,
    private dialog: MatDialog,
    private taskDataService: TaskDataService
  ) {}

  ngOnInit(): void {
    this.taskDataService.checkLocalStorage();
  }

  openNewTaskDialog() {
    const dialogRef = this.dialog.open(NewTaskComponent, {
      panelClass: ['modal-panel'],
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.commonService.alert('The task was added successfully.');
        this.taskDataService.addTask({ ...result, isFinished: false });
      }
    });
  }

  toggleTaskStatus(index: number) {
    this.taskDataService.toggleTaskStatus(index);
  }

  deleteTask(index: number) {
    const dialogRef = this.dialog.open(ConfirmModalComponent, {
      panelClass: ['modal-panel'],
      data: {
        title: 'Delete task',
        text: 'Once you delete the task, it cannot be recovered. Do you want to continue?',
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.commonService.alert('The task was deleted successfully.');
        this.taskDataService.deleteTask(index);
      }
    });
  }

  filter(filter: 'all' | 'completed' | 'incomplete') {
    this.taskList$ = this.taskDataService.filter(filter);
    this.filterButtonLabel = filter ? `Filtered by: ${filter}` : 'Filter';
    this.activeFilter = filter ? true : false;
  }
}
