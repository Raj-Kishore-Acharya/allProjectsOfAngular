import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  dis = false;
  dis1 = false;
  dis2 = false;
  dis3 = false;
  offer = false;
  reg = false;
  infoo = false;
  offers = this.data.info;
  regulardata = this.data.regular;
  infodata = this.data.information;

  constructor(public data : DataService) { }

  ngOnInit(): void {
  }

  form() {
    this.dis = true;

    if (this.dis == true) {
      this.dis1 = false;
      this.dis2 = false;
      this.dis3 = false;
    }
  }
  form1() {
    this.dis1 = true;

    if (this.dis1 == true) {
      this.dis = false;
      this.dis2 = false;
      this.dis3 = false;
    }
  }
  form2() {
    this.dis2 = true;

    if (this.dis2 == true) {
      this.dis1 = false;
      this.dis = false;
      this.dis3 = false;
    }
  }
  form3() {
    this.dis3 = true;

    if (this.dis3 == true) {
      this.dis1 = false;
      this.dis2 = false;
      this.dis = false;
    }
  }
  color() {
    if (this.dis == true) {
      return 'clr'
    }
    else {
      return 'clrr'
    }
  }
  color1() {
    if (this.dis1 == true) {
      return 'clr1'
    }
    else {
      return 'clrr1'
    }

  }
  color2() {
    if (this.dis2 == true) {
      return 'clr2'
    } else {
      return 'clrr2'
    }


  }
  color3() {
    if (this.dis3 == true) {
      return 'clr3'
    } else {
      return 'clrr3'
    }

  }
  offers1(){
    this.offer = true;
    if (this.offer == true) {
      this.reg = false;
      this.infoo = false;

    }
  }
  regular(){
    this.reg = true;
    if (this.reg == true) {
      this.offer = false;
      this.infoo = false;

    }
  }
  info(){
    this.infoo = true;
    if (this.infoo == true) {
      this.reg = false;
      this.offer = false;

    }
  }
  offerclr() {
    if (this.offer == true) {
      return "offerclrr"
    }
    else{
      return "offerclr1"
    }
  }
  regularclr() {
    if (this.reg == true) {
      return "regularclrr"
    }
    else{
      return "regularclr1"
    }
  }
  infoclr() {
    if (this.infoo == true) {
      return "infoclrr"
    }
    else{
      return "infoclr1"
    }
  }

}
