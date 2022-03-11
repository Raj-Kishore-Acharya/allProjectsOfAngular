import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { LabService } from '../lab.service';

@Component({
  selector: 'app-haematology',
  templateUrl: './haematology.component.html',
  styleUrls: ['./haematology.component.css']
})
export class HaematologyComponent implements OnInit {
  @ViewChild('data1') closeButton : ElementRef

  constructor(private data : LabService) { }

  ngOnInit(): void {
  }

  @Input() nameField

  onSubmit(report) {
    console.log(report.value);
    let obj = {
      Name : this.nameField,
      Haemoglobin : report.value.Haemoglobin,
      totalWBC : report.value.totalWBC,
      Neutrophils : report.value.Neutrophils,
      Lymphocytes : report.value.Lymphocytes,
      Eosinophiles : report.value.Eosinophiles,
      Monocytes : report.value.Monocytes,
      Basophills : report.value.Basophills,
      RBC : report.value.RBC,
      PCV : report.value.PCV,
      MCV : report.value.MCV
    }

    this.data.haematoReoprt1(obj).subscribe((res)=> {
      console.log(res);
      this.closeButton.nativeElement.click()
    })
  }

}
