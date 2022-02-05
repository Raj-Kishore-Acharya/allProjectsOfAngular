import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked ,AfterViewChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  getData= false;
  @Input() allData;

  constructor() { }

  onClick() {
    this.getData = !this.getData
  }

  ngOnChanges(changes: SimpleChanges): void {
   console.log('child onChanges is called');
      
  }

  ngOnInit(): void {
    console.log('child oninit is called');
    
  }

  ngDoCheck(): void {
      console.log('child docheck is called');
      
  }

  ngAfterContentInit(): void {
     console.log('child contentinit is c\alled');
      
  }
  
  ngAfterContentChecked(): void {
      console.log('child content checked is called');
      
  }

  ngAfterViewInit(): void {
      console.log('child view in it is called');
      
  }

  ngAfterViewChecked(): void {
      console.log('child view checked is called');
      
  }

  ngOnDestroy(): void {
      console.log('child destroy is called');
      
  }



}
