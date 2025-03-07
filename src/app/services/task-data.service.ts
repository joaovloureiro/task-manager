import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface TaskProps {
  title: string;
  description?: string;
  priority: string;
  isFinished: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TaskDataService {
  constructor() {}

  private taskListSource = new BehaviorSubject<TaskProps[]>([]);
  taskList$ = this.taskListSource.asObservable();

  public addTask(newTask: TaskProps) {
    const newList = [...this.taskListSource.getValue(), newTask];
    this.taskListSource.next(newList);
    this.saveOnLocalStorage(newList);
  }

  public deleteTask(index: number) {
    const updatedTasks = this.taskListSource
      .getValue()
      .filter((value, i) => i !== index);
    this.taskListSource.next(updatedTasks);
    this.saveOnLocalStorage(updatedTasks);
  }

  public toggleTaskStatus(index: number) {
    const updatedTasks = this.taskListSource.getValue();

    if (updatedTasks[index]) {
      updatedTasks[index].isFinished = !updatedTasks[index].isFinished;
    }

    this.taskListSource.next(updatedTasks);
    this.saveOnLocalStorage(updatedTasks);
  }

  private storage: Storage = window.localStorage;
  private saveOnLocalStorage(list: {}) {
    this.storage.setItem('tasksList', JSON.stringify(list));
  }

  public checkLocalStorage() {
    const localStorage = JSON.parse(this.storage.getItem('tasksList')) || null;

    if(localStorage && localStorage.length > 0){
        this.setTaskList(localStorage);
    }
  }

  private setTaskList(taskList: []) {
    this.taskListSource.next(taskList);
  }

  public filter(filter: 'all' | 'completed' | 'incomplete'): Observable<TaskProps[]>{
   return this.taskList$.pipe(
      map(tasks=>{
        console.log(tasks);
        
        if (filter === 'completed') return tasks.filter(task => task.isFinished);
        if (filter === 'incomplete') return tasks.filter(task => !task.isFinished);
        return tasks; 
      })
    )
  }
}
