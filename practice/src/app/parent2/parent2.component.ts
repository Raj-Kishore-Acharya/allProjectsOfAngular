import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements OnInit, OnChanges, DoCheck, AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  constructor() { }

display= true

data ;

onSubmit() {
  this.display = !this.display
}

  ngOnChanges(changes): void {
    console.log(' parent onChanges is called');
       
   }
 
   ngOnInit(): void {
     console.log('parent oninit is called');
     
   }
 
   ngDoCheck(): void {
       console.log('parent docheck is called');
       
   }
 
   ngAfterContentInit(): void {
      console.log('parent contentinit is c\alled');
       
   }
   
   ngAfterContentChecked(): void {
       console.log('parent content checked is called');
       
   }
 
   ngAfterViewInit(): void {
       console.log('parent view in it is called');
       
   }
 
   ngAfterViewChecked(): void {
       console.log('parent view checked is called');
       
   }
 
   ngOnDestroy(): void {
       console.log('parent destroy is called');
       
   }
 

}
