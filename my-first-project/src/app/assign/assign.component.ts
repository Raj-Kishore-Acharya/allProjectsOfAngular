import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.css']
})
export class AssignComponent implements OnInit {

  changeText: boolean;
  
  constructor() { 
    this.changeText = false;
  }

  ngOnInit(): void {
  }

}
