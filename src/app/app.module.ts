import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GroupItemComponent } from './components/group-item/group-item.component';
import { MainComponent } from './components/main/main.component';
import { MovieComponent } from './components/movie/movie.component';
import { ShowsContainerComponent } from './components/shows-container/shows-container.component';
import { ShowsGroupComponent } from './components/shows-group/shows-group.component';
import { SliderComponent } from './components/slider/slider.component';
import { SliderItemComponent } from './components/slider-item/slider-item.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { PagesComponent } from './components/pages/pages.component';
import { GenersMoviesComponent } from './components/geners-movies/geners-movies.component';
import { SearchPagesComponent } from './components/search-pages/search-pages.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ShowsGroupComponent,
    ShowsContainerComponent,
    GroupItemComponent,
    MovieComponent,
    SliderComponent,
    SliderItemComponent,
    CategoriesComponent,
    PagesComponent,
    GenersMoviesComponent,
    SearchPagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
