import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
 
  details : any;
  searchItem: any ;
  display : any ;
  id : any;
  name : any;
  email : any;
  symptoms : any;
  diagnosis : any;

  constructor(public patient : PatientService) { }

  ngOnInit(): void {
    this.patient.getDetail().subscribe((res)=> {
      this.details= res;
      this.display= res[0];
      console.log(this.display);
      
      
    })
  }

  onSubmit(form : NgForm) {
   console.log(form);
   
  }

  action(data : any) {
    this.display=data;
    console.log(this.display);
    
  }

  check(detail: any):any {
    if(detail.name ===this.display.name) {
      return "color"
    }
  }

  updateProduct() {
    
   this.patient.putProduct(this.display.id,this.display).subscribe((res)=> {
      console.log(res);
      
    })
  }
 
}
