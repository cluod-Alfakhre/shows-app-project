/* this component is providing the list of movies to the page component witch responsible on viewing it, 
     in this way the pages component will be reuseble.
*/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigatorService } from 'src/app/services/navigator.service';

@Component({
  selector: 'app-geners-movies',
  templateUrl: './geners-movies.component.html',
  styleUrls: ['./geners-movies.component.scss']
})
export class GenersMoviesComponent implements OnInit {


  totalPages!:number;

  thePageList:any;

  categoryName!:string;

  pageNumber!:string|number;

  genresId!:string;

  constructor(
    private navigatorService:NavigatorService,
    private route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe((params:any)=>{

      this.categoryName = params.categoryName
      this.pageNumber = params.page
      this.genresId = params.genresId


      this.navigatorService.getListDetails(this.categoryName, this.genresId, this.pageNumber)

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
    
    this.router.navigate([`category/${this.categoryName}/${this.genresId}/${this.pageNumber}`])

  }

}
