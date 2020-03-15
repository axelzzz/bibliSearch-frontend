import { Component, OnInit } from '@angular/core';
import { Book } from '../models/Book';
import { SearchEngineService } from '../services/search-engine.service';
import { DataHandlerService } from '../services/data-handler.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  books = [];
  nbLivres = 5;

  constructor(private searchEngineService: SearchEngineService,
              private dataHandlerService: DataHandlerService) { }

  ngOnInit(): void {
    this.getBooks();
    
  }

  

  getBooks() {
    this.searchEngineService.getBooksMetadata()
    .subscribe(books => {
      this.books = books;
    });
  }


  fetchBook(book:Book) {
    
    this.searchEngineService.fetchBook(book.nameFile)
    .subscribe(content => {
      book.content = content;
      this.dataHandlerService.changeBook(book.content);
    });     
  }

 
  filter(pattern: string) {
    console.log('Pattern searched :', pattern);
    this.searchEngineService.filter(pattern)
    .subscribe(books => {
      this.books = books;
    });
  }

  

}
