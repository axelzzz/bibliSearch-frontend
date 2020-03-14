import { Component, OnInit } from '@angular/core';
import { Book } from '../models/Book';
import { SearchEngineService } from '../services/search-engine.service';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
import { NgStyle } from '@angular/common';
import { NgxSmartModalService } from 'ngx-smart-modal';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  
  books = [];
  nbLivres = 5;

  constructor(private searchEngineService: SearchEngineService,
              public ngxSmartModalService: NgxSmartModalService) { }

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
