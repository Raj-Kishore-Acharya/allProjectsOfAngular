import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, ContentChild, DoCheck, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit, DoCheck, AfterViewChecked, AfterContentChecked {


  constructor() { }

  ngOnInit(): void {
  }
 
  @ContentChild('input') data : ElementRef
  // @ViewChild('button') button : ElementRef
  @ViewChild('clr') Color : ElementRef
  @ViewChild('clr1') color1 : ElementRef
 
  onSubmit() {
    this.Color.nativeElement.innerText = `Your input is ${this.data.nativeElement.value}`
  this.color1.nativeElement.style.color = this.data.nativeElement.value;

  }

  ngDoCheck(): void {
      console.log('docheck called');
      
  }

  ngAfterContentChecked(): void {
      console.log('content check called');
      
  }
  
  ngAfterViewChecked(): void {
      console.log('view checked called');
      
  }
  




}
