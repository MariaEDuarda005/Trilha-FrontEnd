import { Component, Input } from '@angular/core';
import { StartsComponent } from '../starts/starts.component';
import { MatExpansionModule } from '@angular/material/expansion'
import { Book } from '../../models/book';

@Component({
  selector: 'app-books-card',
  imports: [ MatExpansionModule, StartsComponent ],
  templateUrl: './books-card.component.html',
  styleUrl: './books-card.component.css'
})
export class BooksCardComponent {
  @Input()
  book: Book = {
    id: 0,
    title: 'nome do livro',
    author: 'autor do livro',
    pages: 0,
    quantity: 0,
    price: 0,
    year: 0,
    avaliation: 0,
    genres: []
  }
}
