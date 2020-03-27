import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { configUrls } from "../../assets/config";
import { Observable } from 'rxjs';
import { Book } from '../models/Book';


@Injectable({
  providedIn: 'root'
})


export class SearchEngineService {

  constructor(private http: HttpClient) { }

  getBooksMetadata() : Observable<Book[]> {
    return this.http.get<Book[]>(configUrls.searchUrlLocal);
  }


  filter(pattern: string) {    
    return this.filterCriterias(pattern, false, false, false, false, false);
  }

  filterCriterias(pattern: string, 
                  isSearchByTitle: boolean,
                  isSearchByAuthor: boolean,
                  isSearchByReleaseDate: boolean,
                  isSearchByPostingDate: boolean,
                  isSearchByLanguage: boolean) {

    return this.http.get<any>(configUrls.filterUrlLocal+pattern+"&isSearchByTitle="+isSearchByTitle
                                                               +"&isSearchByAuthor="+isSearchByAuthor
                                                               +"&isSearchByReleaseDate="+isSearchByReleaseDate
                                                               +"&isSearchByPostingDate="+isSearchByPostingDate
                                                               +"&isSearchByLanguage="+isSearchByLanguage);   
  }

  fetchBook(nameFile:string) : Observable<string> {
    
    let url = configUrls.proxyUrl + configUrls.gutenbergUrl2;
    
    if(nameFile.indexOf('.txt.utf-8') >= 0){           
      url = url + nameFile.replace(".txt.utf-8","") + "/" + nameFile.replace(".txt.utf-8","-8.txt");
    }
    else {
      if(nameFile.indexOf('-8.txt') >= 0){         
        url = url + nameFile.replace("-8.txt","") + "/" + nameFile;
      }
      else{
        if(nameFile.indexOf('-0.txt') >= 0){           
          url = url + nameFile.replace("-0.txt","") + "/" + nameFile;
        }
        else {         
          url = url + nameFile.replace(".txt","") + "/" + nameFile;
        }
     } 
    }         
    
    return this.http.get( url , {responseType: 'text'});//"/pg" + nameFile);
  }
}
