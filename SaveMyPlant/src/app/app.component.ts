import { Component, OnInit } from '@angular/core';
// import * as tf from '@tensorflow/tfjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showUploadDescription = false;
  showRessourcesDescription = false;
  title = 'SaveMyPlant';

  // model : tf.LayersModel;

  // constructor() {}

  // ngOnInit() {
  //   this.loadModel();
  // }

  // async loadModel() {
  //   const path = "asset/model.json";
  //   this.model = await tf.loadLayersModel(path);
  // }

  // async predict(image : ImageData) {
  //   await tf.tidy(()=> {
  //     let img = tf.browser.fromPixels(image, 1);
  //     img = img.resizeBilinear([64,64]);
  //     img = img.reshape([1, 64, 64,1]);
  //     img = tf.cast(img, 'float32');
  //     img = img.div(255.);

  //     const output = this.model.predict(img) as any;
  //     const pred = Array.from(output.argMax(1).dataSync());
  //     //this.predictionOut = ...
  //   })
  // }
}
