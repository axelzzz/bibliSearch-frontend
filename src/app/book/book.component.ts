import { Component, OnInit } from '@angular/core';
import { Book } from '../models/Book';
import { DataHandlerService } from '../services/data-handler.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  book_content: string;

  constructor(private dataHandlerService: DataHandlerService) { }

  ngOnInit() {
    
    this.dataHandlerService.currentBookMessage
    .subscribe(bookMessage => {
      this.book_content = bookMessage;
    })
    
  }



}
