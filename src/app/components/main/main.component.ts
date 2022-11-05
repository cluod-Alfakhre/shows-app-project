import { Component, OnInit, AfterViewInit, ViewChildren, Renderer2, QueryList, ElementRef } from '@angular/core';


import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit {

  @ViewChildren('navLink') navLinks!:QueryList<any>;

  activeNavLink:string='main';

  searchForm = new FormGroup({
    searchInput: new FormControl('', [Validators.required])
  })


  constructor(
    private router:Router,
    private renderer:Renderer2,
    private theRef:ElementRef
  ) { }

  ngOnInit(): void {

    if(localStorage.getItem('activeNavLink')){
      this.activeNavLink = localStorage.getItem('activeNavLink')!
    }

    this.theRef.nativeElement
    .querySelector(`ul .${this.activeNavLink}`)
    .classList.add('active');

  }

  ngAfterViewInit(): void {

    this.navLinks['_results'].forEach((el:any) => {

      this.renderer.listen(el.nativeElement, 'click',()=>{
        this.activeLink(el)
      })

    });

  }


  activeLink(theLink:ElementRef){

    this.navLinks['_results'].forEach((el:any) => {
      this.renderer.removeClass(el.nativeElement, 'active')
    });

    localStorage.setItem('activeNavLink', theLink.nativeElement.classList[1])

    this.renderer.addClass(theLink.nativeElement, 'active')

  }

  
  validateForm(event:any){

    event.preventDefault()

    if(this.searchForm.controls['searchInput'].value.trim()){
      const query = this.searchForm.controls['searchInput'].value
      this.router.navigate([`/search/${query}/1`])
    }


  }


}
