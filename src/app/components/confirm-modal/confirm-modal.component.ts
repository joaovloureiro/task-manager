import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.scss'],
})
export class ConfirmModalComponent implements OnInit {
  modalData!: {
    text: string;
    buttonCancelLabel?: string;
    buttonConfirmLabel?: string;
    title?: string;
  };

  constructor(
    private dialogRef: MatDialogRef<ConfirmModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    data: {
      text: string;
      buttonCancelLabel?: string;
      buttonConfirmLabel?: string;
      title?: string;
    }
  ) {
    this.modalData = data;
  }

  ngOnInit(): void {}

  close(confirm: boolean = false) {
    this.dialogRef.close(confirm);
  }
}
