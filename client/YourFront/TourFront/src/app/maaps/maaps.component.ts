import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { AgmDirectionModule } from 'agm-direction'
import { Component, ElementRef, NgModule, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AgmCoreModule, MapsAPILoader } from '@agm/core';



@Component({
  selector: 'app-maaps',
  templateUrl: './maaps.component.html',
  styleUrls: ['./maaps.component.css']
})


export class MaapsComponent implements OnInit {
  
  public latitude: number;
  public longitude: number;
  public maxSpeed: number;
  public zoom: number;
  public polyline: Array<any>;
  public polylines: Array<any>;
  
  
  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {}
  
  ngOnInit() {
    //set google maps defaults
    this.zoom = 3;
    this.maxSpeed = 40;
    this.latitude = 21.291;
    this.longitude = -122.214;

    this.polyline = [
        {
            latitude:  19.4946,
            longitude: 72.8604,
            speed: 20
        },
         {
            latitude:  19.2372,
            longitude: 72.8441,
            speed: 20
        },

        {
            latitude: 19.3919,
            longitude: 72.8397,
            speed: 20
        },
        {
            latitude: 19.4564,
            longitude: 72.7925,
            speed: 20
        },
        {
            latitude: 19.1136,
            longitude: 72.8697,
            speed: 20
        }
    ]
    this.polylines = this.rebuildPolylines();
 
    
    //set current position
    this.setCurrentPosition();
    
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {

    });
  }
  private rebuildPolylines() {
    let polylines = [];
    let i = 0;
    let newPolyline = {path: [], color: 'blue'};
    for (let point of this.polyline) {
      console.log(point)
      newPolyline.path.push(point);
      const speedChanged = this.polyline[i+1] && (point.speed < this.maxSpeed && this.polyline[i+1].speed < this.maxSpeed) ||(point.speed > this.maxSpeed && this.polyline[i+1].speed > this.maxSpeed )
      if (point.speed > this.maxSpeed) {
        newPolyline.color = 'red';
      }
      if (speedChanged) {
        newPolyline.path.push( this.polyline[i+1] );
        polylines.push(newPolyline);
        newPolyline = {path: [], color: 'blue'};
      }
      i++;
    }
    console.log(polylines);
    return polylines;
    
  }
  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }
}

