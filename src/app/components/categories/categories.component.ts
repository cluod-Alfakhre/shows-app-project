import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavigatorService } from 'src/app/services/navigator.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categoriesList:any;

  category:string= 'movie';
  
  constructor(private navigatorService:NavigatorService, private rout:ActivatedRoute) { }

  ngOnInit(): void {

    this.rout.params.subscribe((params:any)=>{

      this.category = params.name;

      this.navigatorService.getLists(this.category)

      .subscribe((data:any)=>{

        this.categoriesList = data.genres
        
      })

    })

    
  }

}
