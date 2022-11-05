import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RenderImageService {

  highImageUrl:string = "https://image.tmdb.org/t/p/w500";

  constructor() { }

  loadImage(src:string):Promise<any>{
    
    let highImg = new Image();

    return new Promise((resolve, reject)=>{

      highImg.onload = ()=> resolve(highImg);

      highImg.onerror = reject;

      highImg.src = this.highImageUrl + src;

    })

  }

}
