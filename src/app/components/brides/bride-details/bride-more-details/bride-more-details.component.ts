import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { Bride } from 'src/app/classes/bride';
import { BrideService } from 'src/app/services/bride.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/components/confirm-dialog/confirm-dialog.component';
import { NewJewleryComponent } from '../new-jewlery/new-jewlery.component';
import { bridejewleryService } from 'src/app/services/bridejewleryService.services';
import{search_or_new} from '../../brides-list/brides-list.component'
import { AlertDialogComponent } from 'src/app/components/alert-dialog/alert-dialog.component';
import { finalize, switchMap } from 'rxjs';
@Component({
  selector: 'app-bride-more-details',
  templateUrl: './bride-more-details.component.html',
  styleUrls: ['./bride-more-details.component.css']
})
export class BrideMoreDetailsComponent implements OnInit {
  @Input() public bride!: Bride;
  @Input() public searchOrNew!: search_or_new ;
  @Output() public onCreateNewBride: EventEmitter<void> = new EventEmitter<void>();

  updateOrReadonly: boolean = true;

  constructor(private brideServ: BrideService,
    private bridejewleryServ:bridejewleryService,
    private dialogRef: MatDialogRef<ConfirmDialogComponent> ,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public dialogData: { bride: Bride, searchOrNew: search_or_new })
    {
    if (dialogData && dialogData.bride) {
      this.bride = dialogData.bride;
    }
    this.searchOrNew = dialogData.searchOrNew;
  }
  ngOnInit() {
    this.updateOrReadonly = this.searchOrNew === 'search';
  }

  onupdate() {
    this.updateOrReadonly = false;
  }

async onSave(): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    if (this.searchOrNew === 'search') {
      this.brideServ.updateBride(this.bride).subscribe(
        data => {
          this.dialogRef.close();
          this.brideServ.loadData();
          resolve(); // Resolve the promise when updating is done
        },
        err => {
          alert(err.message);
          reject(err); // Reject the promise if there is an error
        }
      );
    } else {
      this.onCreateNewBride.emit();
      this.brideServ.addBride(this.bride).subscribe(
        (createdBride: number) => {
          this.bride.brideid = createdBride;
          this.brideServ.loadData();
          resolve(); // Resolve the promise when adding is done
        },
        e => {
          alert(e.message);
          reject(e); // Reject the promise if there is an error
        }
      );
    }
  });
}

  async onAdditionClick()
  {
    if(this.bride.bridename==="" && this.bride.groomname==="")
    {
      const dialog = this.dialog.open(AlertDialogComponent, {
        data:'חובה למלא שם כלה או שם חתן'
      })
    }
    else if(this.searchOrNew==="new"){
      await this.onSave()
      this.searchOrNew='search'
    const dialogRef = this.dialog.open(NewJewleryComponent, {
      data: {id: this.bride.brideid}
    })
    dialogRef.componentInstance.onCreateNewBrideJewelry.subscribe(()=>{    
       this.ngOnInit()
    })
    dialogRef.afterClosed().subscribe(result =>{
      console.log("closed")
      this.bridejewleryServ.loadData()
    })}
    else{
      const dialogRef = this.dialog.open(NewJewleryComponent, {
        data: {id: this.bride.brideid}
      })
      dialogRef.componentInstance.onCreateNewBrideJewelry.subscribe(()=>{    
         this.ngOnInit()
      })
      dialogRef.afterClosed().subscribe(result =>{
        console.log("closed")
        this.bridejewleryServ.loadData()
      })
    }
  }


}


