import { Component, OnInit, AfterViewInit, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { NavigatorService } from 'src/app/services/navigator.service';
import { RenderImageService } from 'src/app/services/render-image.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  @ViewChild('theImg') theImg!:ElementRef;


  category:any = 'tv';
  casts:any=[{name:'Hasan'}];
  rating:any;

  theShow:any = {
    title:'Title Is Loading',
    vote_average:'3.5',
    runtime:'00:00',
    release_date:'2022',
    status:'Loading',
    genres:['waiting', 'waiting'],
    overview:'This is a default text for all the shows please wait until the data is loaded'
    
  };

  constructor(
    private navigatorService:NavigatorService,
    private router:Router,
    private renderer:Renderer2,
    private renderImageService:RenderImageService,

    ) { }


  ngOnInit(): void {

    this.theShow = JSON.parse(localStorage.getItem('currentMovie')!)
    this.category = localStorage.getItem('category')!;

    if(!this.theShow){
      this.router.navigate(['main'])
    }

    if(this.category){

      this.navigatorService.getCredits(this.category , this.theShow.id)
      .subscribe((data:any)=>{
        this.casts = data.cast.slice(0,9);
      })
      
    }

  }

  ngAfterViewInit(){

    setTimeout(() => {
      this.renderImageService.loadImage(this.theShow.poster_path)

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
