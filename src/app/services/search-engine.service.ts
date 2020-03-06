import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { configUrl, httpOptions, httpOptionsCORS } from "../../assets/config";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class SearchEngineService {

  constructor(private http: HttpClient) { }

  getBooks() : Observable<any> {
    return this.http.get(configUrl.searchUrl);
  }

  getBooksSearched(pattern: string) {
    console.log('you searched', pattern);
  }

  getBooksSearchedV2() {
    //return this.http.get<>(this.configUrl);
  }

  getAPI(): Observable<any>{
    return this.http.get<any>(configUrl.proxyUrl + configUrl.searchUrl);
  }

  fetchBook(url: string):Observable<any> {
    console.log('iciiii')
    return this.http.get(configUrl.proxyUrl + url);
  }
}
