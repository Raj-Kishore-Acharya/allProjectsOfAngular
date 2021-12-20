import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  instruction:string;                                               //parent-child

  replyFromChild;                                                   //child-parent
  
  constructor() { }

  ngOnInit(): void {
  }

  receiveData(event) {
    this.replyFromChild= event;
  }
 
}
