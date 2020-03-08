import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { configUrl } from "../../assets/config";
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

  

  getAPI(): Observable<any>{
    return this.http.get<any>(configUrl.proxyUrl + configUrl.searchUrl);
  }

  filter(pattern: string) {
    console.log('in service');
    return this.http.get<any>(configUrl.filterUrl+pattern);
  }
}
