import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Correction } from '../classes/correction';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CorrectionService {
  url='https://localhost:7111/api/CorrectionControler/'
  public correctionList:Array<Correction>=[]
  constructor(private http:HttpClient) { }

  getAll():Observable<Array<Correction>>
  {  
    return this.http.get<Array<Correction>>(`${this.url}GetAll`)
  }
  
  loadData()
  {
    this.getAll().subscribe(
      (myData)=>
       {
         this.correctionList = myData;
       },
       myErr=>
       {
         alert(myErr.message);
       }
     );
  }
  
}
