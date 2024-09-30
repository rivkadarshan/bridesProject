import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Correction } from 'src/app/classes/correction';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import {eSupliers} from '../../../enums/esupliers';

@Component({
  selector: 'app-new-corrections',
  templateUrl: './new-corrections.component.html',
  styleUrls: ['./new-corrections.component.css']
})
export class NewCorrectionsComponent {
  public Supliers: Array<string> = [];

  constructor(
    private dialogRef: MatDialogRef<ConfirmDialogComponent> ,
    private dialog: MatDialog,)
    {
      for (const key in eSupliers) {
        if (eSupliers.hasOwnProperty(key)) {
          const SupliersKey = key as keyof typeof eSupliers;
          this.Supliers.push(eSupliers[SupliersKey]);
        }
     } 
  }
  public CurrectionSelect:Correction= new Correction(0,0,0,new Date(),0,"","",false,"","",false,"",new Date(),new Date());
  onCreate()
  {

  }
  public onCancel() {
    this.dialogRef.close();
  }

}
