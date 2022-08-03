import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StghubComponent } from './stghub/stghub.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'STG TECH HUB';
 constructor(private dialog: MatDialog){}
  // pdfsrc="C:\Projects\Angular\stgteckhub\src\assets\Google Cloud Platform.pdf"
  openPopup(){
    this.dialog.open(StghubComponent);
  }
  openJava(){
    this.dialog.open(MenuComponent);
  }
}

