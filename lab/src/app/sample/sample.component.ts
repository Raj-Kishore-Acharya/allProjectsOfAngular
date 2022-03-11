import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LabService } from '../lab.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})

export class SampleComponent implements OnInit {
  detail=true;
  detail1=false;
  detail2=false;
  detail3=false;
  details;
  date = new Date();
  haematoData;
  haematoData1;
  thyroData;
  thyroData1;
  glucoData;
  glucoData1;
  btn;
  inputName;
  constructor(private data : LabService) { }

  ngOnInit(): void {
    this.data.getUser().subscribe((res)=> {
      this.details=res
    })
    this.data.haematoReoprt().subscribe((res)=> {
      this.haematoData = res
      
    })

    this.data.thyroReport().subscribe((res)=> {
      this.thyroData =res
    })

    this.data.glucoReport().subscribe((res)=> {
      this.glucoData=res
    })
  }

  haemato(data) {
   this.haematoData.forEach((res)=> {
     if(res.Name == data.Name) {
       this.haematoData1=res   
        this.detail=false;
        this.detail1=true;
        this.detail2= false;
        this.detail3=false;
     } else {
       this.detail = true
     }
   })
  }

  thyro(data) {
    this.thyroData.forEach((res)=> {
      if(res.Name == data.Name) {
        this.thyroData1=res
        this.detail=false;
        this.detail1=false;
        this.detail2= true;
        this.detail3=false; 
      } else {
        this.detail=true
      }
    })
  }

  gluco(data) {
    this.glucoData.forEach((res)=> {
      if(res.Name == data.Name) {
        this.glucoData1 = res;
        this.detail=false;
        this.detail1=false;
        this.detail2= false;
        this.detail3=true; 
      } else {
        this.detail=true
      }
    })
  }

  onClick() {
    this.detail1 = false
    this.detail = true
  }
  onClick1() {
    this.detail = true
    this.detail2 = false
  }
  onClick2() {
    this.detail = true
    this.detail3 = false
  }
}
