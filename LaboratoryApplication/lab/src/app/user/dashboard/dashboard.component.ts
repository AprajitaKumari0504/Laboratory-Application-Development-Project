import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  viewHeamatology(){
    console.log('viewHeamatology colled');
    
  }
  thyroid(){
    console.log('thyroid colled'); 
  }
  glucomtery(){
    console.log('glucomtery colled');
    
  }

}
