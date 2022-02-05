import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  data='Raj Kishore Acharya';
  datas = {
    name : 'Raj',
    age : 25
  }
  data1 = [10,20,30,40,50]

  fun= prompt('dog or cat')
  colors(){
    if(this.fun=='dog') {
      return 'color'
    } else {
      return 'color1'
    }
  }
  color2='green'
  num=2
  content;
  show= false;
  onClick() {
    this.show = !this.show
    this.content= ' Monalisa Panda'
  }

}
