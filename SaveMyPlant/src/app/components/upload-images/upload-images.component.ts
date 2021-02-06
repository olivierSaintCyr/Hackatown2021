import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  selectedFile: File

  public imagePath;
  imgURL: any;
  public message: string;
  constructor() { }

  ngOnInit(): void {
  }

  onFileChanged(event){
    //this.selectedFile = event.target.files[0]
    
    const file = event.target.files[0];
    this.preview(file);
  }
  onUpload(){
    // Faire le lien avec le AI

  }
  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }



}

