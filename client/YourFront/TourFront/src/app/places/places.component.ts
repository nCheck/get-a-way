import { DataService } from './../data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent  implements OnInit , OnDestroy {
  placesArray: any[] ;
  constructor(public data: DataService) { }

  ngOnInit() {
     this.data.getPlacesData().subscribe((placesData: any[]) => {
      this.placesArray = placesData;
      console.log(this.placesArray);
    });
    console.log(this.placesArray);
  }
  ngOnDestroy() {
  }
}
