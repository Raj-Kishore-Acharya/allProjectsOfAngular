import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  reply
  instruction;
  getReply(event) {
    this.reply= event;
  }

  constructor() { }

  ngOnInit(): void {

  }

  

}
