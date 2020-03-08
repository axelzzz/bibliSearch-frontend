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

  
  books: Book[];
  nbLivres = 5;

  constructor(private searchEngineService: SearchEngineService,
              public ngxSmartModalService: NgxSmartModalService) { }

  ngOnInit(): void {
    this.getBooks();
    
  }

  
  getBooks() {
    this.searchEngineService.getBooks()
    .subscribe(books => {
      this.books = books;
    });
  }

  getAPI() {
    this.searchEngineService.getAPI()
    .subscribe(response => {
      this.nbLivres = response;
      console.log('ici ',this.nbLivres);
    }, (error) => {
      console.log('error',error)
    });
  }

  getBooksSearched(pattern: string) {
    this.searchEngineService.getBooksSearched(pattern);
  }

  fetch() {
    this.fetchBook('http://www.gutenberg.org/files/21/21-0.txt');
  }

  fetchBook(url: string) {
    this.searchEngineService.fetchBook(url)
    .subscribe(response => {
      console.log('ici ', response.text);
    })
  }
 
  filter(pattern: string) {
    console.log('Pattern searched :', pattern);
  }


}
