import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LabService } from '../lab.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})

export class SampleComponent implements OnInit {
  detail;
  detail1=false;
  detail2=false;
  detail3=false;
  detail4;
  details;
  details1;
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

    this.details1= JSON.parse(localStorage.getItem("users"));
    console.log(this.details1);
    
    if(this.details1.role == "admin") {
      this.detail = true
      this.detail4=false
    } else {
      this.detail4=true
      this.detail = false
    }
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

    if(this.details1.role == "admin") {
      this.detail1 = false
      this.detail = true
    } else if(this.details1.role == "user") {
      this.detail1 = false
      this.detail4 = true
    }
    
  }
  onClick1() {
    if(this.details1.role == "admin") {
      this.detail2 = false
      this.detail = true
    } else if(this.details1.role == "user") {
      this.detail2 = false
      this.detail4 = true
    }
  }
  onClick2() {
    if(this.details1.role == "admin") {
      this.detail3 = false
      this.detail = true
    } else if(this.details1.role == "user") {
      this.detail3 = false
      this.detail4 = true
    }
  }

  haemato1() {
    this.haematoData.forEach((res)=> {
      if(res.Name == this.details1.Name) {
        this.haematoData1=res   
         this.detail4=false;
         this.detail1=true;
         this.detail2= false;
         this.detail3=false;
      } else {
        this.detail4 = true
      }
    })
  }

  thyro1() {
    this.thyroData.forEach((res)=> {
      if(res.Name == this.details1.Name) {
        this.thyroData1=res
        this.detail4=false;
        this.detail1=false;
        this.detail2= true;
        this.detail3=false; 
      } else {
        this.detail4=true
      }
    })
  }

  gluco1() {
    this.glucoData.forEach((res)=> {
      if(res.Name == this.details1.Name) {
        this.glucoData1 = res;
        this.detail4=false;
        this.detail1=false;
        this.detail2= false;
        this.detail3=true; 
      } else {
        this.detail4=true
      }
    })
  }
}
