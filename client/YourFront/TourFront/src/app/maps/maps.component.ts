import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AgmCoreModule } from '@agm/core';



@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']

  template: `
  <agm-map [latitude]="lat" [longitude]="lng"></agm-map>
  `
})
export class MapsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
