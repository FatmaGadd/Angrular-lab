import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  imgSrc:string ="1.jpg";
  imgsList:string []=["1.jpg","2.jpg","3.jpg","4.jpg"];
  i:number = 0;
show() {
  if (this.i == this.imgsList.length-1) {
    this.i=-1;
  }
  this.i++;
  this.imgSrc=this.imgsList[this.i];
}
}
