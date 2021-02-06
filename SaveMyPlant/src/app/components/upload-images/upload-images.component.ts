import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ClassifierService } from "../../services/classifier.service";


@Component({
  selector: 'upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.css']
})
export class LoadingComponent implements AfterViewInit {
  selectedFile: File

  public imagePath;
  imgURL: any;
  public message: string;

  @ViewChild('canvas_img', {static:true}) canvas : ElementRef;
  public ctx : CanvasRenderingContext2D;

  @ViewChild('img_classify', {static:true}) imageEl : ElementRef;

  constructor(private classifier:ClassifierService) {
  }

  ngAfterViewInit(): void {
    this.classifier = new ClassifierService();
    const canvasEl = this.canvas.nativeElement;
    this.ctx = canvasEl.getContext('2d');

    canvasEl.width = 256;
    canvasEl.height = 256;

    console.log(this.classifier);
  }

  onFileChanged(event){
    let file = (event.target.files)[0];
    this.preview(file);
    // console.log(this.canvas);
    //this.predict();
  }
  
  // predict(){
  //   // Faire le lien avec le AI
  //   // const canvasEl = this.canvas.nativeElement;
  //   // const img = this.ctx.getImageData(0, 0, canvasEl.width, canvasEl.height);
  //   // // console.log(img);
  //   // console.log(this.classifier.predict(img));
    
  //   console.log(this.imgURL)
  //   setTimeout(async()=>{
  //     let predictions = await this.classifier.predict(this.imgURL.nativeElement);
  //     console.log(predictions);
  //   })

  // }

  
  preview(file) {
    if (file == null) return;
    // console.log(files[0])
    var mimeType = file.type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
    var reader = new FileReader();
    this.imagePath = file;
    reader.readAsDataURL(file); 
    // reader.onload = (_event) => { 
    //   this.imgURL = reader.result; 
    // }

    reader.onload = (res : any) =>{
      this.imgURL = res.target.result;
      setTimeout(async() => {
        const imgEl = this.imageEl.nativeElement;
        let predictions = await this.classifier.predict(imgEl);
        console.log(predictions);
      }, 0);
    }

    // let predictions;
    // console.log(this.imgURL);
    // setTimeout(async()=>{
    //   predictions = await this.classifier.predict(this.imgURL.nativeElement);
    //   console.log(predictions);
    // })

    //console.log(predictions);
    

    // const image = new Image();
    // image.src = file;
    // let context = this.ctx;
    // image.onload = function() {
    //   context.drawImage(image, 256, 256);
    //   let daraUrl = canvas.toDataUrl('image');
    // }
  }

  //fileInfos: Observable<any>;
  //constructor(){}
/*
  onFileChanged(event) {
  this.progressInfos = [];
  this.selectedFiles = event.target.files;
}

uploadFiles() {
  this.message = '';

  for (let i = 0; i < this.selectedFiles.length; i++) {
    this.preview(i, this.selectedFiles[i]);
  }
}
  */

 
  
  // public message: string;
  // public images = [];
  // public myForm = new FormGroup({
  //   name: new FormControl('', [Validators.required, Validators.minLength(3)]),
  //   file: new FormControl('', [Validators.required]),
  //   fileSource: new FormControl('', [Validators.required]),
  //   url: new FormControl('', [Validators.required])
  // });
  
  // preview(event) {
  //   if (event.target.files && event.target.files[0]) {
  //       var filesAmount = event.target.files.length;
  //       for (let i = 0; i < filesAmount; i++) {
  //               var reader = new FileReader();
   
  //               reader.onload = (event:any) => {
  //                 console.log(event.target.result);
  //                  this.images.push(event.target.result); 
                  
                  
  //                  this.myForm.patchValue({
  //                     fileSource: this.images,
  //                     url: reader.result
  //                  });
  //               }
              //reader.readAsDataURL(event.target.files[i]); //
              // reader.onload = (_event) => {//
              // ;} //
             // reader.readAsDataURL(event.target.files[i]);
             // this.imgURL = reader.readAsDataURL(event.target.files[i]);    
  //       }
  //   }
  // }
}
