import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  isChild= false
  empName;
  
  toggleChild() {
    this.isChild= !this.isChild;
  }

  constructor() {
    console.log('parent constructor called');
    
   }

  ngOnInit(): void {
    console.log('parent ngOnInIt is called');
    
  }

  ngOnChanges() {
    console.log('Parent ngOnChanges is called');
    
  }
 
  ngOnDestroy() {
    console.log('Parent ngOnDestroy is called')
  }

  ngDoCheck(): void {
      console.log('Parent DoCheck is called');
      
  }

  ngAfterContentInit(): void {
      console.log('Parent After ContentInIt');
      
  }

  ngAfterContentChecked(): void {
      console.log('Parent contentChecked is called');
      
  }

  ngAfterViewInit(): void {
      console.log('Parent viewInIt is called');
      
  }

  ngAfterViewChecked(): void {
      console.log('Parent viewChecked is called');
      
  }
  

}
