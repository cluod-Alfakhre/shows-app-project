import { Component, OnInit, Input, AfterViewInit, ElementRef, Renderer2, ViewChild  } from '@angular/core';
import { RenderImageService } from 'src/app/services/render-image.service';

@Component({
  selector: 'app-slider-item',
  templateUrl: './slider-item.component.html',
  styleUrls: ['./slider-item.component.scss']
})
export class SliderItemComponent implements OnInit, AfterViewInit {

  @ViewChild('theImg') theImg!:ElementRef;

  @Input() theSliderShow!:any;
  @Input() category!:string;

  constructor(
    private renderer:Renderer2,
    private renderImageService:RenderImageService
  ) { }

  ngOnInit(): void {}
  
  ngAfterViewInit(){
    setTimeout(() => {

      this.renderImageService.loadImage(this.theSliderShow.backdrop_path)

    .then( ( newImage:HTMLImageElement ) =>{

      this.swapHeighQuality(this.theImg, newImage)

  
    })
    .catch( (res) =>{

      console.log("Error Throwed" , res )

    })
    }, 2000);
    
  }

  swapHeighQuality(oldImg:ElementRef, newImg:HTMLImageElement){

    newImg.classList.add('movie-img');
    this.renderer.setAttribute(newImg,'class','movie-img')
    this.renderer.appendChild(oldImg.nativeElement.parentElement , newImg)
    this.renderer.removeChild(oldImg.nativeElement.parentElement, oldImg.nativeElement)

  }


}
