import { Router } from '@angular/router';
import { DataService } from './../data.service';
import { Component, OnInit, OnDestroy, Output , EventEmitter} from '@angular/core';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit , OnDestroy {
  moodArray: Subscription;
  moodArray2 = ['Foodie', 'Religious', 'Party', 'Adventure', 'Entertainment', 'Sightseeing:'];
  duration: number[] = [2, 4, 6, 8, 10, 12];
  minDate = Date.now();
  maxDate = new Date(2020, 0, 1);
  time = {hour: 13, minute: 30};
  meridian = true;
  foodies = false;
  religious = false;
  party = false;
  pubs = false;
  nearby = false;
  @Output() form1 = new EventEmitter<any[]>();
  constructor(public data: DataService , private router: Router) {
  }
  ngOnInit() {
    this.moodArray =  this.data.getData().subscribe(res => console.log(res));
    console.log(this.moodArray);
  }
  ngOnDestroy() {
    this.moodArray.unsubscribe();
  }
  onSubmit(f: NgForm) {
    console.log('submitted');
     // this.data.postMoodData(f.value);
      console.log(f.value);
      this.router.navigate(['/places']);
      console.log('went from home component ');
  }
  toggleMeridian() {
      this.meridian = !this.meridian;
  }

}
