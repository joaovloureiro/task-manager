import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  form!: FormGroup;

  constructor(private dialogRef: MatDialogRef<NewTaskComponent>, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      description: [''],
      priority: ['', [Validators.required]]
    })
  }

  close(task: {} | null = null) {
    this.dialogRef.close(task)
  }

  save() {
    this.close(this.form?.value);
  }
}
