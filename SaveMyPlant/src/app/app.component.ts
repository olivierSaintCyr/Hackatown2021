import { Component, OnInit } from '@angular/core';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import * as tf from '@tensorflow/tfjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showUploadDescription = false;
  showRessourcesDescription = false;
  showGuideDescription =false;
  title = 'SaveMyPlant';
}
