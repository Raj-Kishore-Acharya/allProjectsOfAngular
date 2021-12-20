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
    this.isChild=true;
  }

  constructor() {
    console.log('parent constructor called');
    
   }

  ngOnInit(): void {
    console.log('parent ngOnInIt is called');
    
  }

  ngOnChanges() {
    console.log('child ngOnChanges is called');
    
  }
 
  ngOnDestroy() {
    console.log('child ngOnDestroy is called')
  }

  ngDoCheck(): void {
      console.log('child DoCheck is called');
      
  }

  ngAfterContentInit(): void {
      console.log('child After ContentInIt');
      
  }

  ngAfterContentChecked(): void {
      console.log('contentChecked is called');
      
  }

  ngAfterViewInit(): void {
      console.log('viewInIt is called');
      
  }

  ngAfterViewChecked(): void {
      console.log('viewChecked is called');
      
  }
  

}
