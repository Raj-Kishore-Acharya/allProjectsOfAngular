import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { LabService } from '../lab.service';

@Component({
  selector: 'app-thyroid',
  templateUrl: './thyroid.component.html',
  styleUrls: ['./thyroid.component.css']
})
export class ThyroidComponent implements OnInit {
  @ViewChild('data1') closeButton : ElementRef

  constructor(private data : LabService) { }

  ngOnInit(): void {
  }

  @Input() nameField;

  onSubmit(form) {
    console.log(form.value);
    let obj = {
      Name : this.nameField,
      Thyronine : form.value.Thyronine,
      Thyroxine : form.value.Thyroxine,
      TSH : form.value.TSH
    }
    this.data.thyroReport1(obj).subscribe((res)=> {
      console.log(res);
      this.closeButton.nativeElement.click() 
    })

  }

}
