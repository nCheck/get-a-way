import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
show:boolean[];

dropdowndata:string[]=["Historical","Food","Religious"];
dummydata:string[]=["aaa1","ccada2","aefdaf3"];
  constructor() { }
  indexOfDropdown(s:string):number{
    console.log(this.dropdowndata.indexOf(s)-1);
    return this.dropdowndata.indexOf(s)-1;
  }
  dropdownclicked(s:string): void{
    var dropdownindex=this.dropdowndata.indexOf(s) -1;
    this.show[dropdownindex]=!this.show[dropdownindex];
    console.log(this.show);
  }
  ngOnInit() {
    this.show = new Array(this.dropdowndata.length).fill(false);

  }

}

