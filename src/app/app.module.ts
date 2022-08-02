import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
//import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {MatDialogModule} from '@angular/material/dialog';
import { MaterialExampleModule } from './material.module';
import { StghubComponent } from './stghub/stghub.component';
import { FormsModule } from '@angular/forms';
import { MenuComponent } from 'src/menu/menu.component';

@NgModule({
  declarations: [  
    AppComponent,StghubComponent,MenuComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PdfViewerModule,
    MatDialogModule,
    MaterialExampleModule

  ],
  providers: [],
 bootstrap: [AppComponent]
})
export class AppModule { }
