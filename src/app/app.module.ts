import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { BrideJewleryComponent } from './components/brides/bride-details/bride-jewlery/bride-jewlery.component';
import { DebtComponent } from './components/brides/bride-details/debt/debt.component';
import { BrideMoreDetailsComponent } from './components/brides/bride-details/bride-more-details/bride-more-details.component';
import { NewJewleryComponent } from './components/brides/bride-details/new-jewlery/new-jewlery.component';
import { BridesListComponent } from './components/brides/brides-list/brides-list.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { NewCorrectionsComponent } from './components/Corrections/new-corrections/new-corrections.component';
import { CorrectionsListComponent } from './components/Corrections/corrections-list/corrections-list.component';
import { RegisterOnTheSiteComponent } from './components/register-on-the-site/register-on-the-site.component';



@NgModule({
  declarations: [
    AppComponent,
    ConfirmDialogComponent,
    BrideJewleryComponent,
    DebtComponent,
    BrideMoreDetailsComponent,
    NewJewleryComponent,
    BridesListComponent,
    LogInComponent,
    NewCorrectionsComponent,
    CorrectionsListComponent,
    RegisterOnTheSiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }
