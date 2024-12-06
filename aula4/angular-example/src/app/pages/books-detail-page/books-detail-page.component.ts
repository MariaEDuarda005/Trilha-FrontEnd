import { Component, OnInit } from '@angular/core';
import { MatCardModule } from "@angular/material/card"
import { MatList } from "@angular/material/list"
import { MatListItem } from "@angular/material/list"
import { Observable } from 'rxjs';
import { BooksService } from '../../services/books.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../models/book';
import { CommonModule } from '@angular/common';
import { StartsComponent } from '../../components/starts/starts.component';

@Component({
  selector: 'app-books-detail-page',
  imports: [MatCardModule,MatListItem, MatList, CommonModule, StartsComponent],
  templateUrl: './books-detail-page.component.html',
  styleUrl: './books-detail-page.component.css'
})
export class BooksDetailPageComponent implements OnInit{
  book: Observable<Book> | undefined;

  constructor(private service: BooksService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.book = this.service.getDetails(id)
    })
  }
}
