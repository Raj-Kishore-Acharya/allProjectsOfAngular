import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-query2',
  templateUrl: './query2.component.html',
  styleUrls: ['./query2.component.css']
})
export class Query2Component implements OnInit, AfterViewInit, AfterContentInit {

  // @ViewChild("example") heading:ElementRef                      //view Queries- @viewChild
  @ViewChildren('example') headings : QueryList<any>               //view Queries- @viewChildren
  // @ContentChild('sample')  list : ElementRef                        //view Queries- @ContentChild
  // @ContentChildren('sample') lists : QueryList<any>
  constructor() { }

  ngOnInit(): void {
    // console.log(this.heading);
    
  }

  ngAfterViewInit(): void {
      //  console.log(this.heading);                                             //view Queries- @viewChild
      // console.log(this.heading.nativeElement);                               //view Queries- @viewChild
      // console.log(this.heading.nativeElement.innerText);                     //view Queries- @viewChild

      console.log(this.headings);                                       //view Queries- @viewChildren
      this.headings.forEach(element => {                            
        console.log(element.nativeElement.innerText);                     //view Queries- @viewChildren
      })
  }

  ngAfterContentInit(): void {
      // console.log(this.list);                                               //view Queries- @ContentChild
      // console.log(this.list.nativeElement.innerText);                       //view Queries- @ContentChild
      

      // console.log(this.lists);                                         //view Queries- @ContentChildren
      // this.lists.forEach(ele => {
      //   console.log(ele.nativeElement.innerText);
      // })                                                               //view Queries- @ContentChildren
  }

}
