import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ClassifierService } from "../../services/classifier.service";
import { CardRessourceComponent } from "../../components/card-ressource/card-ressource.component";


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
  predictions : Array<any>;
  
  @ViewChild('img_classify', {static:true}) imageEl : ElementRef;
  @ViewChild(CardRessourceComponent) card;
  
  constructor(private classifierService:ClassifierService) {
  }

  ngAfterViewInit() {
    console.log(this.card);
  }

  onFileChanged(event){
    let file = (event.target.files)[0];
    this.preview(file);

  }
  
  preview(file) {
    if (file == null) return;
    
    var mimeType = file.type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
    var reader = new FileReader();
    this.imagePath = file;
    reader.readAsDataURL(file);

    reader.onload = (res : any) =>{
      this.imgURL = res.target.result;
      setTimeout(async() => {
        const imgEl = this.imageEl.nativeElement;
        this.classifierService.predict(imgEl).then(data => {
            console.log(data[0]);
            //this.card.getCard(data[0]);
          });
          
        //console.log(this.predictions)
      }, 0);
    }
  }
}
