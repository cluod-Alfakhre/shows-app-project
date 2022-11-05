import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NavigatorService } from 'src/app/services/navigator.service';

@Component({
  selector: 'app-shows-group',
  templateUrl: './shows-group.component.html',
  styleUrls: ['./shows-group.component.scss']
})
export class ShowsGroupComponent implements OnInit {

  @Input() title:string = 'Title';

  @Input() category:string = 'class';

  @Input() categoryTitle:string = 'movie';

  @Input() theTag!:string;

  groupList:[]=[]

  complete=false;

  constructor(private service:NavigatorService, private router:Router) { }

  ngOnInit(): void {
    if(this.theTag){

      this.service.showByTag(this.category, this.theTag).subscribe((data:any)=>{

        this.groupList = data.results.slice(0,6) || [];

        this.complete=true;
        
      })
    }
  }

  onItemClick(item:any){

    this.service.getMovie(this.category, item.id)
    .subscribe((movie:any)=>{

      localStorage.setItem('currentMovie',JSON.stringify(movie))
      localStorage.setItem('category', this.category)
      this.router.navigate(['movie']);
      
    })
    
    
  }

}
