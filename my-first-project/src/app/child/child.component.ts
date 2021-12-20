import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // @Input() details;                                          //parent-child
  @Input() getInstruction;                                      //parent-child


  constructor() { }

  ngOnInit(): void {
  }

  @Output()                                                   //child-parent
  childEvent = new EventEmitter() ;
  replyMethod(event:any) {
    this.childEvent.emit(event.target.value)
  }

  

}
