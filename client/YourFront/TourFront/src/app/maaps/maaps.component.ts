import { Component, OnInit } from '@angular/core';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-maaps',
  templateUrl: './maaps.component.html',
  styleUrls: ['./maaps.component.css']
})


export class MaapsComponent implements OnInit {

  title: string = 'My first AGM project';
  lat: number = 19.4946;
  lng: number = 72.8604;

  // lati: any[] = [19.4946,19.2372,19.3919,19.4564,19.1136]
  // longi: any[] = [72.8604,72.8441,72.8397,72.7925,72.8697]

  arry1: any[] = [19.4946,72.8604]
  arry2: any[] = [19.2372, 72.8441]
  arry3: any[] = [19.3919, 72.8397]
  arry4: any[] = [19.4564,72.7925]
  arry5: any[] = [19.1136,72.8697]

  latlang: any[]


  constructor() {
  }

  ngOnInit() {  

    this.latlang = [this.arry1,this.arry2,this.arry3,this.arry4,this.arry5]
    console.log(this.latlang)
  }

}

