import { Component, OnInit } from '@angular/core';
import { Book } from '../models/Book';
import { SearchEngineService } from '../services/search-engine.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  books: Book[];

  constructor(private searchEngineService: SearchEngineService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(): void {
    this.searchEngineService.getBooks();
  }

  getBooksSearched(pattern: string) {
    this.searchEngineService.getBooksSearched(pattern);
  }
  /*
  getBooks(): void {
    this.searchEngineService.getBooks()
    .subscribe(books => (this.books = books));
  }
*/



}
