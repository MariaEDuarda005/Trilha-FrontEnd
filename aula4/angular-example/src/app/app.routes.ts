import { Routes } from '@angular/router';
import { BooksDetailPageComponent } from './pages/books-detail-page/books-detail-page.component';
import { BooksPageComponent } from './pages/books-page/books-page.component';

export const routes: Routes = [
  {path: '', component: BooksPageComponent},
  {path: 'book/:id', component: BooksDetailPageComponent}
];
