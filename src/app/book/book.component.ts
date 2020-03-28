import { Component, OnInit } from '@angular/core';

import { DataHandlerService } from '../services/data-handler.service';

import { NgxSpinnerService } from 'ngx-spinner';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  bookMessage: [string, string];

  constructor(private dataHandlerService: DataHandlerService,
              private spinner: NgxSpinnerService,
              private main: MainComponent) { }

  ngOnInit() {
    this.spinner.show();
    this.dataHandlerService.currentBookMessage
    .subscribe(message => {
      this.bookMessage = message;
      this.spinner.hide();
    }); 

    this.main.showSuggestion = true;
  }
}
