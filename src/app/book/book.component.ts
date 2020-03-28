import { Component, OnInit } from '@angular/core';

import { DataHandlerService } from '../services/data-handler.service';

import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  book_content: string;

  constructor(private dataHandlerService: DataHandlerService,
              private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.dataHandlerService.currentBookMessage
    .subscribe(bookMessage => {
      this.book_content = bookMessage;
      this.spinner.hide();
    }); 
  }
}
