import { PassformdataService } from './../passformdata.service';
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
  lat: any;
  lng: any;
  @Output() form1 = new EventEmitter<any[]>();
  constructor(public data: DataService , private router: Router , public passformdataService: PassformdataService) {
    if (navigator) {
    navigator.geolocation.getCurrentPosition( pos => {
        this.lng = +pos.coords.longitude;
        this.lat = +pos.coords.latitude;
      });
    }
  }
  ngOnInit() {
    // this.moodArray =  this.data.getData().subscribe(res => console.log(res));
    // console.log(this.moodArray);
  }
  ngOnDestroy() {
    // this.moodArray.unsubscribe();
  }
  onSubmit(f: NgForm) {
    
      this.passformdataService.passFirstFormData({form1 : f.value , lat :  this.lat , lng : this.lng  }); 
      console.log({form1 : f.value , lat :  this.lat , lng : this.lng  });
      console.log('went from home component ');
      this.router.navigate(['/places']);
     
  }
  toggleMeridian() {
      this.meridian = !this.meridian;
  }

}
