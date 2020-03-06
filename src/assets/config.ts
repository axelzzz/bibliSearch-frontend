import { HttpHeaders } from '@angular/common/http';

export const configUrl = {
    "searchUrl": "http://127.0.0.1:8000/bibliSearch/" ,
    "proxyUrl":"https://cors-anywhere.herokuapp.com/"  
}

export const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      /*
      'Authorization': 'g)_h^pjz0oqdk!zd*$&&c2l&ne-be$)c36llt=mh-lhkf@4rtq'
      */    
    })
};


export const httpOptionsCORS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'Origin',
    //'Access-Control-Allow-Origin':'*'
  })
};