import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';
  bikeDetails = {
    bikeName : 'DUKE',
    bikeOwner : 'Raj',
    bikeColor : 'Orange'
  }
}
