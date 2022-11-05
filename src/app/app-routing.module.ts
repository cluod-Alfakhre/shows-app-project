import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { GenersMoviesComponent } from './components/geners-movies/geners-movies.component';
import { MovieComponent } from './components/movie/movie.component';
import { SearchPagesComponent } from './components/search-pages/search-pages.component';
import { ShowsContainerComponent } from './components/shows-container/shows-container.component';

const routes: Routes = [
  {
    path:'',
    component:ShowsContainerComponent,
    pathMatch:"full"
  },
  {
    path:'main',
    component:ShowsContainerComponent,
  },
  {
    path:'movie',
    component:MovieComponent,
  },
  {
    path:'categories',
    redirectTo: 'categories/movie'
  },
  {
    path:'categories/:name',
    component:CategoriesComponent,
  },
  {
    path:'category/:categoryName/:genresId/:page',
    component:GenersMoviesComponent,
  },
  {
    path:'search/:query/:page',
    component:SearchPagesComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
