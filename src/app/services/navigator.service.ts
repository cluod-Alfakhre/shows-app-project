import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HotToastService } from '@ngneat/hot-toast';

@Injectable({
  providedIn: 'root'
})
export class NavigatorService {


  apiKey:string= environment.API_KEY;
  baseUrl:string = environment.BASE_URL

  constructor(
    private http:HttpClient, 
    private toast:HotToastService,

    ) { }

  showByTag(category:string, tag:string){
    
    return this.http.get(`${this.baseUrl}/${category}/${tag}?api_key=${this.apiKey}&page=1&region=us`)
    

  }

  getLatest(category:string, tag:string, time:string='day'){
    
    return this.http.get(`${this.baseUrl}/${tag}/${category}/${time}?api_key=${this.apiKey}`)
    .pipe(
      this.toast.observe({
        success:'Good 😊',
        loading: 'Loading',
        error: 'Check The Network Connection' 
      })
    )
  }

  renderShowImage(img:string){
    return this.http.get(
      `https://image.tmdb.org/t/p/original/${img}`
    )
  }

  getMovie(category:string ,itemId:any){
    
    return this.http.get(`${this.baseUrl}/${category}/${itemId}?api_key=${this.apiKey}`)
    .pipe(
      this.toast.observe({
        success:'Good 😊',
        loading: 'Loading',
        error: 'Check The Network Connection' 
      })
    )
  }

  getCredits(category:string ,id:any){
    return this.http.get(`${this.baseUrl}/${category}/${id}/credits?api_key=${this.apiKey}`)
  }

  getRating(category:string ,id:any){
    return this.http.get(`${this.baseUrl}/${category}/${id}/reviews?api_key=${this.apiKey}&page=1`)
  }

  getLists(category:string ){
    return this.http.get(`${this.baseUrl}/genre/${category}/list?api_key=${this.apiKey}`)
    .pipe(
      this.toast.observe({
        success:'Good 😊',
        loading: 'Loading',
        error: 'Check The Network Connection' 
      })
    )
  }

  getListDetails(categoryName:string ,genresId:number|string, page:number|string){
    return this.http.get(`${this.baseUrl}/discover/${categoryName}?api_key=${this.apiKey}&sort_by=popularity.desc&page=${page}&with_genres=${genresId}`)
    .pipe(
      this.toast.observe({
        success:'Good 😊',
        loading: 'Loading',
        error: 'Check The Network Connection' 
      })
    )
  }

  searchByQuery(query:string, pageNumber:string|number){
    return this.http.get(`${this.baseUrl}/search/multi?api_key=${this.apiKey}&query=${query}&page=${pageNumber}`)
    .pipe(
      this.toast.observe({
        success:'Good 😊',
        loading: 'Loading',
        error: 'Check The Network Connection' 
      })
    )
  }

}
