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
export class PlacesComponent  implements OnInit {
  animal: string;
  name: string;
  placesArray: any[] ;
  panelOpenState = false;
  placesSelectedArray: any[] = [];

  constructor(public data: DataService , public snackBar: MatSnackBar) { }

  ngOnInit() {
     this.data.getPlacesData().subscribe((placesData: any[]) => {
      this.placesArray = placesData;
      console.log(this.placesArray);
    });
    console.log(this.placesArray);
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
}
onSubmit(f: NgForm) {
  this.data.postFormData(this.placesSelectedArray);
}
onSelect(placeSelected: any) {
  if (this.placesSelectedArray.length <= 5 ) {
    console.log(placeSelected);
    this.placesSelectedArray.push(placeSelected);
    console.log(this.placesSelectedArray);
  }

}
}
