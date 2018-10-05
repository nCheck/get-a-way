import { DataService } from './../data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit , OnDestroy {
  moodArray: Subscription;
  moodArray2 = ['Foodie', 'Religious', 'Party', 'Adventure', 'Entertainment', 'ightseeing'];
  constructor(public data: DataService) {
  }
  ngOnInit() {
    this.moodArray =  this.data.getData().subscribe(res => console.log(res));
    console.log(this.moodArray);
    this.data.postMoodData('s');
  }
  ngOnDestroy() {
    this.moodArray.unsubscribe();
  }
  onSubmit(f: NgForm) {
      this.data.postMoodData('s');
  }

}
