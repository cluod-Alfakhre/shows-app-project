import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigatorService } from 'src/app/services/navigator.service';

@Component({
  selector: 'app-search-pages',
  templateUrl: './search-pages.component.html',
  styleUrls: ['./search-pages.component.scss']
})
export class SearchPagesComponent implements OnInit {

  totalPages!:number;

  thePageList:any;

  pageNumber!:string|number;

  query!:string;

  constructor(
    private navigatorService:NavigatorService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    
    this.route.params.subscribe((params:any)=>{

      this.query = params.query
      this.pageNumber = params.page


      this.navigatorService.searchByQuery(this.query, this.pageNumber)

      .subscribe((data:any)=>{

        
        this.totalPages = data.total_pages
        
        this.thePageList = data.results;


      })

    })

  }

  navToPage(increas:boolean){

    if(increas){
      this.pageNumber = +this.pageNumber + 1
    }
    else{
      this.pageNumber = +this.pageNumber - 1
    }
    
    this.router.navigate([`/search/${this.query}/${this.pageNumber}`])

  }


}
