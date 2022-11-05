import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { NavigatorService } from 'src/app/services/navigator.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  @Input() title:string = 'Title';
  @Input() category:string = 'class';
  @Input() categoryTitle:string = 'movie';
  @Input() theTag!:string;

  sliderList:[]=[];

  complete:boolean = false;

  constructor(
    private service:NavigatorService,
    private router:Router
    ) { }

  ngOnInit(): void {
    if(this.theTag){

      this.service.getLatest(this.category, this.theTag).subscribe((data:any)=>{

        this.sliderList = data.results.slice(0, 10) || [];

        this.complete=true;
        
      })
    }
  }

  onItemClick(item:any){
    console.log(item)
    this.service.getMovie(this.category, item.id)
    .subscribe((movie:any)=>{

      localStorage.setItem('currentMovie',JSON.stringify(movie))
      localStorage.setItem('category', this.category)
      this.router.navigate(['movie']);
      
    })
    
    
  }

  ngAfterViewInit(): void {
    
  }

}
