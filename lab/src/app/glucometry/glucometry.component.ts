import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { LabService } from '../lab.service';

@Component({
  selector: 'app-glucometry',
  templateUrl: './glucometry.component.html',
  styleUrls: ['./glucometry.component.css']
})
export class GlucometryComponent implements OnInit {
  constructor(private data : LabService) { }
  @ViewChild('data1') closeButton : ElementRef

  ngOnInit(): void {
  }

  @Input() nameField;

  onSubmit(gluco){
    let obj = {
      Name : this.nameField,
      Fastingsugar : gluco.value.Fastingsugar,
      PrandialSugar : gluco.value.PrandialSugar,
      HbA1C : gluco.value.HbA1C,
      calcium : gluco.value.calcium
    }
    this.data.glucoReport1(obj).subscribe((res)=> {
      console.log(res);
      this.closeButton.nativeElement.click()
    })
  }



}
