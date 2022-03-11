import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LabService } from '../lab.service';

@Component({
  selector: 'app-enter-sample',
  templateUrl: './enter-sample.component.html',
  styleUrls: ['./enter-sample.component.css']
})
export class EnterSampleComponent implements OnInit {
  patients;
  sample = true;
  sample1 =false;
  sample2=false;
  sample3 = false;
  names;
  constructor(private data : LabService, private route : Router) { }
  @ViewChild('name') nameField : ElementRef

  ngOnInit(): void {
    this.data.getUser().subscribe((res)=> {
      this.patients=res
    })
  }

  onSubmit(form) {
    console.log(form.value);  
    this.names=this.nameField.nativeElement.value
    console.log(this.names);
    
    // if(form.value.haemato==true) {
    //   this.route.navigate(['haemato'])
    // }
    // else if(form.value.glu==true) {
    //   this.route.navigate(['gluco'])
    // }
    // else if(form.value.thy==true) {
    //   this.route.navigate(['thyroid'])
    // }

    if(form.value.haemato==true) {
      this.sample2=true;
      this.sample=false;
    }
    if(form.value.glu==true) {
      this.sample1 = true
      this.sample=false;
    }
    if(form.value.thy==true) {
      this.sample3=true;
      this.sample=false;
    }
    
  }

}
