import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { NavigatorService } from 'src/app/services/navigator.service';


@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  @Input() thePageList!:any;

  @Input() totalPages!:number;
  
  @Input() pageNumber!:number|string;

  @Input() category:string='none';

  @Output() onPage = new EventEmitter()
  

  allowClick:boolean = false;

  constructor(
    private navigatorService:NavigatorService,
    private router:Router
    
  ) { }

  ngOnInit(): void {}

  emitToPage(increas:boolean){

    if(this.allowClick){
      this.onPage.emit(increas)
    }

    this.allowClick = false;
    
    setTimeout(() => {
      this.allowClick = true;
    }, 3000); 

  }

  onItemClick(item:any){

    let theCategory = this.category
    if(theCategory == "none"){
      theCategory = item.media_type;
      console.log(theCategory)
    }
    this.navigatorService.getMovie(theCategory, item.id)
    .subscribe((movie:any)=>{

      localStorage.setItem('currentMovie',JSON.stringify(movie))
      localStorage.setItem('category', theCategory)
      this.router.navigate(['movie']);
      
    })
    
    
  }


}
