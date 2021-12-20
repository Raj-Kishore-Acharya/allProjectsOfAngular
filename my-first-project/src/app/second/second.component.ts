import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  
  @Input() empName1

  constructor() {
    console.log('child constructor called');
    
   }

  ngOnInit(): void {
    console.log('child ngOnInIt is called');
    
  }

  ngOnChanges(changes:any) {
    console.log('child ngOnChanges is called');
    
  }

}
