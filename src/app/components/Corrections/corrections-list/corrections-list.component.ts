import { Component } from '@angular/core';
import {Correction} from '../../../classes/correction'
import { CorrectionService } from 'src/app/services/correction.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { NewCorrectionsComponent } from '../new-corrections/new-corrections.component';
@Component({
  selector: 'app-corrections-list',
  templateUrl: './corrections-list.component.html',
  styleUrls: ['./corrections-list.component.css']
})
export class CorrectionsListComponent {
  public corrections:Correction[] =[]
  public originalCorrection: Correction[] = [];
  public CurrectionSelect:Correction= new Correction(0,0,0,new Date(),0,false,"","",false);
  hoveredRow: number | null = null;
  public searchName: string = '';
  public searchPhone: string = '';

  clickedRows = new Set<Correction>();
  router: any;

 constructor(
  private brideServ:CorrectionService,
  private dialog: MatDialog)
 {
 }
  ngOnInit(): void {
   this.brideServ.getAll().subscribe(
    s=>{
      this.originalCorrection = s;
      this.corrections = [...s];
    },
    e=>{}
   );
  }

  public addNewCorrction() {
     const dialog = this.dialog.open(NewCorrectionsComponent, {
      data: { correction: new Correction(0,0,0,new Date(),0,false,"","",false), searchOrNew: "new" }
    }); 
    // dialog.componentInstance.onCreateNewBride.subscribe(() => {
    //   this.brideServ.loadData();
    //   this.ngOnInit();
    // });
  }
   public onDelete(id:number)
   {
    const dialog = this.dialog.open(ConfirmDialogComponent, {
      data:'האם אתה בטוח שברצונך למחוק?'
    })
    dialog.componentInstance.onYes.subscribe(() => {
      // this.brideServ.deleteBride(id).subscribe((x:Number)=>{
      // this.ngOnInit()
      //   if(x==-1)
      //    alert("לא נמצא רשומה")      
      // })
    })
      this.ngOnInit()
    }
    // public onMoreDetails(bride: Bride) {
    //   const dialogRef = this.dialog.open(BrideMoreDetailsComponent, {
    //     data: { bride: bride,searchOrNew:'search' }
    //   });
    // }
    // public onJewlery(bride: Bride) {
    //   const dialogRef = this.dialog.open(BrideJewleryComponent, {
    //     data: { bride: bride }
    //   });
    // }
    setHoveredRow(index: number): void {
      this.hoveredRow = index;
    }
  
    clearHoveredRow(): void {
      this.hoveredRow = null;
    }

    public filterBridesByName(): void {
      if (this.searchName.trim() === '') {
        this.onClearSearchName();
        return;
      }  
      this.corrections = this.originalCorrection.filter(correction =>
        correction.forHoeDeliveredMessage.includes(this.searchName) 
      );
    }

    public onSearchName(): void {
      this.filterBridesByName();
    }
    
    public onClearSearchName(): void {
      this.searchName = '';
      this.corrections = [...this.originalCorrection];
    }

    // public filterBridesByPhone(): void {
    //   if (this.searchPhone.trim() === '') {
    //     this.onClearSearchByPhone();
    //     return;
    //   }  
    //   this.brides = this.originalBrides.filter(bride =>
    //     bride.bridephone.includes(this.searchPhone) || bride.groomphone.includes(this.searchPhone)
    //   );
    // }

    // public onSearchPhone(): void {
    //   this.filterBridesByPhone();
    // }
    
    // public onClearSearchByPhone(): void {
    //   this.searchPhone = '';
    //   this.brides = [...this.originalBrides];
    // }
}
