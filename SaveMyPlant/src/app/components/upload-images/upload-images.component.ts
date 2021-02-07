import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewChildren } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ClassifierService } from "../../services/classifier.service";
import { CardRessourceComponent } from "../../components/card-ressource/card-ressource.component";
import { CardRessourceManagerComponent } from "../../components/card-ressource-manager/card-ressource-manager.component";
import { Card } from 'src/app/models/card';

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
  showCard=false;
  card : Card;
  @ViewChild('img_classify', {static:true}) imageEl : ElementRef;
  
  constructor(private classifierService:ClassifierService) {
  }

  ngAfterViewInit() {
  }

  onFileChanged(event){
    let file = (event.target.files)[0];
    this.preview(file);

  }
  
  preview(file) {
    if (file == null) return;
    
    var mimeType = file.type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images files are supported.";
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
            this.card = CardRessourceManagerComponent.getCard(data[0]);
            this.showCard=true;
          });
      }, 0);
    }
  }
}
