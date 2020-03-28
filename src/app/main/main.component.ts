import { Component, OnInit } from '@angular/core';

import { Book } from '../models/Book';
import { SearchEngineService } from '../services/search-engine.service';
import { DataHandlerService } from '../services/data-handler.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  books = [];

  isSearchByTitle = false;
  isSearchByAuthor = false;
  isSearchByReleaseDate = false;
  isSearchByPostingDate = false;
  isSearchByLanguage = false;
  isSearchInCurrentBooks = false;

  constructor(private searchEngineService: SearchEngineService,
              private dataHandlerService: DataHandlerService,
              private spinner: NgxSpinnerService) { }


  ngOnInit(): void {
    this.getBooks();
  }


  getBooks() {
    this.spinner.show();
    this.searchEngineService.getBooksMetadata()
    .subscribe(books => {
      this.books = books;
      this.spinner.hide();
    });
  }


  filter(pattern: string) {
    this.spinner.show();
    if(! (this.isSearchByTitle 
       || this.isSearchByAuthor
       || this.isSearchByReleaseDate
       || this.isSearchByPostingDate
       || this.isSearchByLanguage) ) {

        this.searchEngineService.filter(pattern)
          .subscribe(books => {
            this.books = books;
            this.spinner.hide();
          });
    }

    else {
      
      this.searchEngineService
      .filterCriterias(pattern,
                    this.isSearchByTitle,
                    this.isSearchByAuthor,
                    this.isSearchByReleaseDate,
                    this.isSearchByPostingDate,
                    this.isSearchByLanguage)
                    .subscribe(books => {
                      this.books = books;
                      this.spinner.hide();
                    });
    }     
  }


  fetchBook(book:Book) {           
    this.searchEngineService.fetchBook(book.nameFile)
    .subscribe(content => {            
      book.content = content;
      this.dataHandlerService.changeBook(book.content);      
    },
    error => {
      console.error("Book not found, trying with other name file ", error);
      this.fetchBookAttemptWithModifiedName(book);
    });     
  }
  

  fetchBookAttemptWithModifiedName(book:Book) { 
    book.nameFile = book.nameFile.replace(".txt.utf-8",".txt")   
    this.searchEngineService.fetchBook(book.nameFile)
    .subscribe(content => {      
      book.content = content;
      this.dataHandlerService.changeBook(book.content);      
    },
    error => {
      console.error("Book modified not found ", error);
    });     
  }
}
