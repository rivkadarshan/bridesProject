import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'jewleryProject';
  public timeNow:Date | undefined;
  constructor(private router:Router)
  {
    this.timeNow= new Date();
  }
  ngOnInit(): void {
  }

  goHome()
  {
    this.router.navigateByUrl("/");
  }
  
}
