import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private snackBar: MatSnackBar) { }

  alert(message: string, style: string = 'success', action: string = '', duration: number = 4000){
    this.snackBar.open(message, action, {duration, panelClass: `snackbar-${style}`})
  }
}
