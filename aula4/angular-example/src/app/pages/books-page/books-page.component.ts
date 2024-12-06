import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatListModule } from '@angular/material/list';
import { BooksCardComponent } from '../../components/books-card/books-card.component';
import { Observable } from 'rxjs';
import { BookData } from '../../models/book-data';
import { BooksService } from '../../services/books.service';
import { MatDivider } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatFormField, MatLabel } from '@angular/material/form-field';

@Component({
  selector: 'app-books-page',
  imports: [ MatCardModule, CommonModule, MatListModule,
    BooksCardComponent, MatPaginatorModule, MatDivider,
    FormsModule, MatIconModule, MatLabel, MatFormField],
  templateUrl: './books-page.component.html',
  styleUrl: './books-page.component.css'
})
export class BooksPageComponent implements OnInit{

  query = ""
  limit = 50
  page = 0
  books: Observable<BookData> | undefined;

  constructor(private service: BooksService){}

  ngOnInit(): void {
    this.updateBooks();
  }

  updateBooks(){
    this.books = this.service.search(this.query, this.page, this.limit);
  }

  handlePage($event: PageEvent){
    this.page = $event.pageIndex;
    this.limit = $event.pageSize;
    this.updateBooks();
  }

  setQuery(newQuery: string){
    this.query=newQuery;
    this.onQueryChange();
  }

  changeCount=0;
  onQueryChange(){
    this.changeCount++; // somando o tempo todo

    let instanceChange = this.changeCount; // fixo
    setTimeout(() => { // executa a cada meio segundo se não fizer nada
      if(this.changeCount === instanceChange){
        this.updateBooks();
        this.page = 0;
      }
    }, 500)
  }
}
