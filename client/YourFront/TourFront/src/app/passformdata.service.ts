import { Injectable, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import {RequestOptions, Request, RequestMethod , Headers} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PassformdataService {
  @Output() datacombined = new EventEmitter<any>();
  dataArray: any[] = []; // stores objects of first form and second form
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  options = { headers: this.headers };
   constructor(private http: HttpClient) { }
   passFirstFormData(data: any) {
     console.log(data);
     this.dataArray.push(data);
   }
   passFinalFormData(data: any) {
     this.dataArray.push(data);
     console.log(this.dataArray);
     console.log('went from pass form services' + this.dataArray);
     this.postFormData(this.dataArray);
   }
   postFormData(body) {
     console.log(this.dataArray)
    this.http.post('/api/maketrip', body,
     this.options
   ).subscribe(
     dat => console.log(dat)
   );
   console.log('posted from data service');
 }
}
