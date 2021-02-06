import { Component, OnInit, Injectable } from '@angular/core';
import{ Headers, Http, Response} from '@angular/http';
import { Observable } from 'rxjs'; 

class ImageSnippet {

  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'bwm-image-upload',
  templateUrl: 'upload-images.component.html',
  styleUrls: ['upload-images.component.css']
})
export class ImageUploadComponent {

  selectedFile: ImageSnippet;

  constructor(private imageService: ImageService){}
//Verifie l'envoie de photo
  private onSuccess() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'ok';
  }

  private onError() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'fail';
    this.selectedFile.src = '';
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.selectedFile.pending = true;
      this.imageService.uploadImage(this.selectedFile.file).subscribe(
        (res) => {
          this.onSuccess();
        },
        (err) => {
          this.onError();
        })
    });

    reader.readAsDataURL(file);
  }
}



export class ImageService {

  constructor(private http: Http) {}


  public uploadImage(image: File): Observable<Response> {
    const formData = new FormData();

    formData.append('image', image);

    return this.http.post('/api/v1/image-upload', formData);
  }
}