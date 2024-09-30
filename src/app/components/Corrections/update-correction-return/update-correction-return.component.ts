import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogData } from '../../brides/bride-details/new-jewlery/new-jewlery.component';

@Component({
  selector: 'app-update-correction-return',
  templateUrl: './update-correction-return.component.html',
  styleUrls: ['./update-correction-return.component.css']
})
export class UpdateCorrectionReturnComponent {
  public correctionId: string = '';
  constructor(
    private dialogRef: MatDialogRef<UpdateCorrectionReturnComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {

   }
   onEnter() {
    //פה צריך להוסף עדכון של רשומה 
    //מעדכן תאריך של חזרה ושהתיקון חזר
    alert("פה צריך לעדכן שהתיקון חזר")
  }
  public onCancel() {
    this.dialogRef.close();
  }
  }

