import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get('/api/mood');
  }
  postMoodData(data: string) {
     this.http.post('/api/setMood',
      data
    );
    console.log('went');
  }
}
