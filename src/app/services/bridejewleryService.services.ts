import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { jewleryService } from 'src/app/services/jewlery.services';
import { BrideJewlery } from '../classes/BrideJewelry';

@Injectable({
  providedIn: 'root'
})    

export class bridejewleryService {
  url="https://localhost:7111/api/BridejewelryControler/"
  public brideJewelry:Array<BrideJewlery>=[]

  constructor(private http:HttpClient,private jewleryServ:jewleryService) { }

  getAll():Observable<Array<BrideJewlery>>
  {  
    return this.http.get<Array<BrideJewlery>>(`${this.url}GetAll`)
  }

  loadData()
  {
    this.getAll().subscribe(
      (myData)=>
       {
         //הפרמטר מכיל את הערך המוחזר במקרה של הצלחה
         console.log("loaded b j")
         this.brideJewelry = myData;
       },
       myErr=>
       {
         //אובייקט שיש בו מידע על השגיאה שהתרחשה
         alert(myErr.message);
       }
     );
  }

  getById(id: number):Observable<Array<BrideJewlery>>
  {
    return this.http.get<Array<BrideJewlery>>(`${this.url}GetJewelryAccordingToBrideId/${id}`);
  }

  addBrideJewelry(newBrideJewelry:BrideJewlery):Observable<number>
  {
    return this.http.post<number>(`${this.url}AddBrideJewelry`,newBrideJewelry); 
  }

   deleteBrideJewelry(brideJewelryId:number):Observable<number>
  { 
    return this.http.delete<number>(`${this.url}DeleteBrideJewelry/${brideJewelryId}`)
  }

  refreshList(list:Array<BrideJewlery>)
  {
    this.brideJewelry = list;
  }
  updateListBrideJewlery(listBrideJewlery: Array<BrideJewlery>): Observable<number> {
    return this.http.put<number>(`${this.url}UpdateListBrideJewelry`, listBrideJewlery);
  }
}