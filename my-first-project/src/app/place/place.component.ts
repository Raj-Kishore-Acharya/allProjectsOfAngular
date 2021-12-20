import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
  componentPlaces;
  placeName;

  constructor(public data : DataService) { }

  ngOnInit(): void {
    this.componentPlaces = this.data.place
  }
  
  sendToServices() {
    this.data.onRequest(this.placeName)
    
  }

}
