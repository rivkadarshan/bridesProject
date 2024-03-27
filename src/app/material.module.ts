import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatTableModule} from '@angular/material/table'
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
    declarations: [
    ],
    imports: [
        BrowserModule,
    ],
    providers: [],
    bootstrap: [],
    exports: [MatButtonModule,
              MatIconModule,
              MatDialogModule,
              MatFormFieldModule,
              MatInputModule,
              MatSelectModule,
              MatChipsModule,
              MatGridListModule,
              MatToolbarModule,
              MatListModule,
              MatNativeDateModule,
              MatDatepickerModule,
              MatTableModule,
              MatSlideToggleModule
                        ]
})
export class MaterialModule {
}
