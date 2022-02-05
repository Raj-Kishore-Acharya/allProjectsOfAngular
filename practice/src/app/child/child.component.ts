import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Input, OnInit, Output, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, AfterViewInit, AfterContentInit {
 
  @Input() getInstruction;

  @Output() 
  childEvent = new EventEmitter();
  giveReply(event) {
    this.childEvent.emit(event.target.value);
  } 

  // onClick(event) {
  //   this.childEvent.emit('I am Raj Kishore Acharya')
  // }
 
 constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('child') data: ElementRef
  @ViewChildren('child') datas : QueryList<any>
  ngAfterViewInit(): void {
      this.data.nativeElement.innerText= ' Radhe'
      this.datas.forEach((ele)=> {
        ele.nativeElement.style.color='red'
      })
  }

  @ContentChild('parent') value: ElementRef
  @ContentChildren('parent') values : QueryList<any>
  ngAfterContentInit(): void {
      this.value.nativeElement.style.backgroundColor='Green'
    this.values.forEach(ele => {
      ele.nativeElement.style.fontSize='xx-large'
      ele.nativeElement.style.backgroundColor='green'
    });
  }




}
