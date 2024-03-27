import { Component, Inject, Input, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Bride } from 'src/app/classes/bride';
import { BrideJewlery } from 'src/app/classes/BrideJewelry';
import { Jewelry } from 'src/app/classes/Jewelry';
import { bridejewleryService } from 'src/app/services/bridejewleryService.services';
import { NewJewleryComponent } from '../new-jewlery/new-jewlery.component';
import { ConfirmDialogComponent } from 'src/app/components/confirm-dialog/confirm-dialog.component';
import { AlertDialogComponent } from 'src/app/components/alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-bride-jewlery',
  templateUrl: './bride-jewlery.component.html',
  styleUrls: ['./bride-jewlery.component.css']
})

export class BrideJewleryComponent implements OnInit {
  [x: string]: any;
  public bridejewelry: BrideJewlery[] = [];
  public selectJewelry: Array<Jewelry> = [];
  date:Date=new Date;
  protected Isdifferent:boolean=false;
  @Input() public bride = new Bride(0, "", "", "", "", new Date, new Date, 0,"",0,"");

  constructor(private bridejewleryServ: bridejewleryService,
              private dialog: MatDialog,
              private dialogRef: MatDialogRef<ConfirmDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public dialogData: { bride: Bride } ) 
    {
      if (dialogData && dialogData.bride) 
        this.bride = dialogData.bride;
    }     

  ngOnInit(): void {
    this.bridejewleryServ.loadData()
    this.refresh()
  }
// פתיחת דיאלוג
   openDialog(): void {
    const dialogRef = this.dialog.open(NewJewleryComponent, {
      data: {id: this.bride.brideid, SelectJewelry: this.selectJewelry}
    })
    dialogRef.componentInstance.onCreateNewBrideJewelry.subscribe(()=>{    
       this.ngOnInit()
    })
    dialogRef.afterClosed().subscribe(result =>{
      this.bridejewleryServ.loadData()
      this.refresh()
    })
  }

  //Loading data for a jewelry array for the current bride
  refresh(){
    if (this.bride.brideid != 0)
      this.bridejewleryServ.getById(this.bride?.brideid).subscribe(
        (data) => {
          this.bridejewelry = data
        },
        e => { alert("error") }
      );
  }
  onDelete(brideJewelryId:number)  {
   const dialogRef = this.dialog.open(ConfirmDialogComponent, {
     data:'?האם אתה בטוח שברצונך למחוק'
   })
   dialogRef.componentInstance.onYes.subscribe(() => {
    this.bridejewleryServ.deleteBrideJewelry(brideJewelryId).subscribe(
      (data)=>{this.ngOnInit();},
        e=>{alert("הפעולה נכשלה");
      }
      ); 
   })
     this.ngOnInit()
   }

  OnUpdateBrideJewrely(bridejewelryid:number)
  {
    alert("updateBrideJewerley")
  }
  saveChanges()
  {
    console.log(this.bridejewelry)
  this.bridejewleryServ.updateListBrideJewlery(this.bridejewelry).subscribe(
    (response) => {
      const dialogRef = this.dialog.open(AlertDialogComponent, {
        data:'השינויים נשמרו בהצלחה'
      })
      this.dialogRef.close();
    },
    (error) => {
      const dialogRef = this.dialog.open(AlertDialogComponent, {
        data:error
      })
      this.dialogRef.close();
      // Handle error
      console.error("Error saving changes:", error);
    }
    
  );    
  }

  onChoiceOrNot(j: BrideJewlery) {
    this.Isdifferent=true;
    console.log("Before toggle:",this.bridejewelry);
    console.log("Before toggle:", j.ischoose);
    console.log("After toggle:", j.ischoose);
    console.log("After toggle:", this.bridejewelry);
  } 
  onCancel(): void {
    if(this.Isdifferent===true)
    {
      const dialogRef = this.dialog.open(ConfirmDialogComponent, {
        data:'אתה מעונין לשמור את השינויים שביצעת?'
      })
      dialogRef.componentInstance.onYes.subscribe(() => { 

        this.saveChanges();
      })
    }
    this.Isdifferent=false;
    this.dialogRef.close(); // Close the dialog
}

}
