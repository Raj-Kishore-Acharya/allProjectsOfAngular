import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit, OnChanges, DoCheck, OnDestroy, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  
  @Input() empName1

  constructor() {
    console.log('child constructor called');
    
   }

  ngOnInit(): void {
    console.log('child ngOnInIt is called');
    
  }

  ngOnChanges() {
    console.log('child ngOnChanges is called');
    
  }

  ngDoCheck(): void {
      console.log("child ngDoCheck is called");
      
  }

  ngOnDestroy(): void {
      console.log("child ondestroy is called");
      
  }

  ngAfterContentInit(): void {
      console.log("child AfterContentInIt is called");
      
  }

  ngAfterContentChecked(): void {
      console.log("Child AfterContentChecked is Called");
      
  }

  ngAfterViewInit(): void {
      console.log("child AfterViewInIt is called");
      
  }

  ngAfterViewChecked(): void {
      console.log("Child afterViewChecked is called");
      
  }

}
