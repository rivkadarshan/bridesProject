import { Component } from '@angular/core';
import { shop } from 'src/app/classes/shop';

@Component({
  selector: 'app-register-on-the-site',
  templateUrl: './register-on-the-site.component.html',
  styleUrls: ['./register-on-the-site.component.css']
})
export class RegisterOnTheSiteComponent {
  shop:shop=new shop("","","")
  selectedFileName: string = 'בחר קובץ לוגו';
  onFileSelected(event: any): void {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      this.selectedFileName = selectedFile.name;
    } else {
      this.selectedFileName = 'בחר קובץ';
    }
  }
  onOk(){
  alert("ok")
  }
}
