import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  private myBook_content: string;
  private myBookMessage = new BehaviorSubject<string>(this.myBook_content);
  currentBookMessage = this.myBookMessage.asObservable();

  constructor() { }

  changeBook(someBook_content: string) {
    this.myBookMessage.next(someBook_content);
  }

}
