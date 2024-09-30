import { Component } from '@angular/core';
import {Correction} from '../../../classes/correction'
import { CorrectionService } from 'src/app/services/correction.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
import { NewCorrectionsComponent } from '../new-corrections/new-corrections.component';
import { UpdateCorrectionReturnComponent } from '../update-correction-return/update-correction-return.component';
@Component({
  selector: 'app-corrections-list',
  templateUrl: './corrections-list.component.html',
  styleUrls: ['./corrections-list.component.css']
})
export class CorrectionsListComponent {
  public corrections:Correction[] =[]
  public originalCorrection: Correction[] = [];
  public CurrectionSelect:Correction= new Correction(0,0,0,new Date(),0,"","",false,"","",false,"",new Date(),new Date());
  hoveredRow: number | null = null;
  public searchName: string = '';
  public searchId:string='';
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
      data: { correction: new Correction(0,0,0,new Date(),0,"", "",false,"","",false,"",new Date(),new Date()), searchOrNew: "new" }
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
    setHoveredRow(index: number): void {
      this.hoveredRow = index;
    }
  
    clearHoveredRow(): void {
      this.hoveredRow = null;
    }

    public onSearchName(): void {
      if (this.searchName.trim() === '') {
        this.onClearSearchName();
        return;
      }  
      this.corrections = this.originalCorrection.filter(correction =>
        correction.forHoeDeliveredMessage.includes(this.searchName) 
      );
    }

    public onSearchId():void{
      if (this.searchId.trim() === '') {
        this.onClearSearchName();
        return;
      }  
      this.corrections = this.originalCorrection.filter(correction =>
        correction.forHoeDeliveredMessage.includes(this.searchName) 
      );
    }
    public onSearchPhone():void{
      if (this.searchPhone.trim() === '') {
        this.onClearSearchName();
        return;
      }  
      this.corrections = this.originalCorrection.filter(correction =>
        correction.forHoeDeliveredMessage.includes(this.searchName) 
      );
    }

    public onClearSearchName(): void {
      this.searchName = '';
      this.corrections = [...this.originalCorrection];
    }

    public UpdateCorrectionReturn():void{
      const dialog = this.dialog.open(UpdateCorrectionReturnComponent, {
      }); 
      // dialog.componentInstance.onCreateNewBride.subscribe(() => {
      //   this.brideServ.loadData();
      //   this.ngOnInit();
      // });
    }
}
