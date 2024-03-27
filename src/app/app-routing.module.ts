import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BridesListComponent } from './components/brides/brides-list/brides-list.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { CorrectionsListComponent } from './components/Corrections/corrections-list/corrections-list.component';

const routes: Routes = 
[
    {path:"", component:BridesListComponent},
    {path:"CorrectionsList", component:CorrectionsListComponent},
    {path:"LogIn", component:LogInComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
