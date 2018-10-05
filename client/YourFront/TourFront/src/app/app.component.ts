import { Observable, Subscription } from 'rxjs';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , OnDestroy {
  constructor(public data: DataService) {

  }
  moodArray: Subscription;
  ngOnInit() {
    this.moodArray =  this.data.getData().subscribe(res => console.log(res));
    console.log(this.moodArray);
  }
  ngOnDestroy() {
    this.moodArray.unsubscribe();
  }



}
