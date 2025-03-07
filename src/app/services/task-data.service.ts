
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';

export interface TaskProps {
    title: string,
    description?: string,
    priority: string,
    isFinished: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class TaskDataService {
    constructor() { }

    private taskListSource = new BehaviorSubject<TaskProps[]>([]);
    taskList$ = this.taskListSource.asObservable();

    addTask(newTask: TaskProps) {
        this.taskListSource.next([...this.taskListSource.getValue(), newTask]);
    }
}


