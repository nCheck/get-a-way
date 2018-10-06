import { PassformdataService } from './../passformdata.service';
import { DataService } from './../data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Inject} from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.css']
})
export class PlacesComponent  implements OnInit , OnDestroy {
  animal: string;
  name: string;
  placesArray: any[] ;
  panelOpenState = false;
  placesSelectedArray: any[] = [];

  constructor(public data: DataService , public snackBar: MatSnackBar, public passformdataService: PassformdataService) { }
  foodieLength = 10;
  religiousLength: string;
  partyLength: string;
  sightseeingLength: string;
  subscribedData: Subscription;
  ngOnInit() {
     this.subscribedData = this.data.getPlacesData().subscribe((placesData: any[]) => {
      this.placesArray = placesData;
    });
    this.foodieLength = this.placesArray[0].length;
      console.log('check' + this.foodieLength);
      this.religiousLength = this.placesArray[1].length;
      this.sightseeingLength = this.placesArray[2].length;
      this.partyLength = this.placesArray[3].length;
    console.log(this.placesArray);
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
}
onSubmit(f: NgForm) {
  this.passformdataService.passFinalFormData(this.placesSelectedArray);
  console.log('went from places');
  console.log(this.placesSelectedArray);
}
onSelect(placeSelected: any) {
  if (this.placesSelectedArray.length <= 5 ) {
    console.log(placeSelected);
    this.placesSelectedArray.push(placeSelected);
    console.log(this.placesSelectedArray);
  }
 
}
ngOnDestroy() {
this.subscribedData.unsubscribe();
}
}
