import { Component, OnInit, Input, AfterViewInit, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { RenderImageService } from 'src/app/services/render-image.service';

@Component({
  selector: 'app-group-item',
  templateUrl: './group-item.component.html',
  styleUrls: ['./group-item.component.scss']
})
export class GroupItemComponent implements OnInit, AfterViewInit {

  @Input() theShow!:any;
  @Input() category!:string;

  @ViewChild('theImg') theImg!:ElementRef;

  constructor(
    private renderer:Renderer2,
    private renderImageService:RenderImageService
    ) { }

  ngOnInit(): void {
    if(this.category == "none"){

      this.category = this.theShow.media_type;

    }
  }

  ngAfterViewInit(){

    setTimeout(() => {

      this.renderImageService.loadImage(this.theShow.backdrop_path)

      .then( ( newImage:HTMLImageElement ) =>{

        this.swapHeighQuality(this.theImg, newImage)

    
      })
      .catch( (res) =>{

        this.swapDefaultImage(this.theImg, 'assets/image-loading.svg')
        console.log('Error: cant show the items backdrop image', this.theShow, res)

      })

    }, 2000);
    
    
  } 

  swapHeighQuality(oldImg:ElementRef, newImg:HTMLImageElement){

    newImg.classList.add('movie-img');
    this.renderer.setAttribute(newImg,'class','movie-img')
    this.renderer.appendChild(oldImg.nativeElement.parentElement , newImg)
    this.renderer.removeChild(oldImg.nativeElement.parentElement, oldImg.nativeElement)

  }

  swapDefaultImage(oldImg:ElementRef, defaultSrc:string){
    console.log(oldImg)
    this.renderer.setAttribute(oldImg.nativeElement,'src', defaultSrc)
  }


  
}
