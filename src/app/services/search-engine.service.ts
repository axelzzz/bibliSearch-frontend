import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchEngineService {

  configUrl = 'assets/config.json';

  constructor(private http: HttpClient) { }

  getBooks() {
    console.log('aaaaa');
  }

  getBooksSearched(pattern: string) {
    console.log('you searched', pattern);
  }

  getBooksSearchedV2() {
    //return this.http.get<>(this.configUrl);
  }
}
