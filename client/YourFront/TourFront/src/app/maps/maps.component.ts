import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AgmCoreModule } from '@agm/core';



@Component({
  selector: 'app-maps',
  template: `
  <agm-map [latitude]="lat" [longitude]="lng"></agm-map>
  `,
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
