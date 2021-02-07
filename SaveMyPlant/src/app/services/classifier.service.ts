import { Injectable } from '@angular/core';
import * as tf from '@tensorflow/tfjs';

@Injectable({
  providedIn: 'root'
})

export class ClassifierService {
  model : tf.LayersModel;
  private predictions : Array<any>;

  constructor() {
    this.loadModel();
  }

  async loadModel() {
    const path = "../../assets/model.json";
    this.model = await tf.loadLayersModel(path);
  }

  async predict(image : ImageData) {
    await tf.tidy(()=> {
      let img = tf.browser.fromPixels(image, 3);
      img = img.resizeBilinear([64,64]);
      img = img.reshape([1, 64, 64, 3]);
      img = tf.cast(img, 'float32');
      img = img.div(255.);

      const output = this.model.predict(img) as any;
      const pred = Array.from(output.argMax(1).dataSync());
      this.predictions = pred;
    })
    return this.predictions;
  }
}
