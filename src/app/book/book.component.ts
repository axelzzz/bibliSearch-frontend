import { Component, OnInit } from '@angular/core';

import { DataHandlerService } from '../services/data-handler.service';

import { NgxSpinnerService } from 'ngx-spinner';
import { MainComponent } from '../main/main.component';
import { SearchEngineService } from '../services/search-engine.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  nameFile: string
  book_content: string;

  constructor(private dataHandlerService: DataHandlerService,
              private spinner: NgxSpinnerService,
              private main: MainComponent,
              private searchEngineService : SearchEngineService) { }

  ngOnInit() {
    this.spinner.show();
    this.dataHandlerService.currentBookMessage
    .subscribe(bookMessage => {
      this.nameFile = bookMessage;

      this.searchEngineService.fetchBook(this.nameFile)
      .subscribe(content => {            
        this.book_content = content;
        this.dataHandlerService.changeBook(this.book_content);      
      },
      error => {
        console.error("Book not found, trying with other name file ");
        this.fetchBookAttemptWithModifiedName(this.nameFile);
      });

      this.spinner.hide();
    }); 

    this.main.showSuggestion = true;

    
  }

  fetchBookAttemptWithModifiedName(file: string) { 
   
    file = file.replace(".txt.utf-8",".txt")   
    
    this.searchEngineService.fetchBook(file)
    .subscribe(content => {      
      this.book_content = content;      
    },
    error => {
      console.error("Book modified not found ", error);
    });  
    
    
  }
}
