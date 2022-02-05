import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DetailService } from '../detail.service';

@Component({
  selector: 'app-mock',
  templateUrl: './mock.component.html',
  styleUrls: ['./mock.component.css']
})
export class MockComponent implements OnInit, AfterViewInit {
details;
trick= false

  @ViewChild('magic2') value :ElementRef


  constructor(private data : DetailService) { }

  ngOnInit(): void {
  }

  onClick() {
   this.value.nativeElement.click()
  }

  onSubmit() {
    this.trick = !this.trick
    this.details = this.data.details;
  }



  ngAfterViewInit(): void {
      // this.value.nativeElement.innerText = this.data.details
  }
}
