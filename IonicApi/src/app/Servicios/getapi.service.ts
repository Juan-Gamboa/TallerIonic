import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetapiService {

  constructor(public _http:HttpClient) {

   }
   getdata<T> (url: string){
    url='http://localhost:3001/api/v1/getCursos'
    return this._http.get<T[]>(url);
   }
 
}
