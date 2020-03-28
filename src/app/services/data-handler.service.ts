import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  private myBook_content: [string,string];
  private myBookMessage = new BehaviorSubject<[string,string]>(this.myBook_content);
  currentBookMessage = this.myBookMessage.asObservable();

  constructor() { }

  changeBook(someBook_content: [string,string]) {
    this.myBookMessage.next(someBook_content);
  }

}
