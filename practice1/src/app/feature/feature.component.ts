import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit{

  @ViewChildren('table') detail : QueryList<any>

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.detail.forEach(ele => {
      ele.nativeElement.style.color='black'
      if(ele.nativeElement.innerText=='Acharya') {
        ele.nativeElement.style.color='red'
      } 
    })
  }

  onClick1() {
    this.detail.forEach(ele => {
      ele.nativeElement.style.color='black'
      if(ele.nativeElement.innerText=='Guntupali') {
        ele.nativeElement.style.color='green'
      }
      
    })
  }

  onClick2() {
    this.detail.forEach(ele => {
      ele.nativeElement.style.color='black'
      if(ele.nativeElement.innerText=='Patel') {
        ele.nativeElement.style.color='pink'
      }
      
    })
  }

  onClick3() {
    this.detail.forEach(ele => {
      ele.nativeElement.style.color='black'
      if(ele.nativeElement.innerText=='Domala') {
        ele.nativeElement.style.color='yellow'
      }
      
    })
  }
    
  onClick4() {
    this.detail.forEach(ele => {
      ele.nativeElement.style.color='black'
      if(ele.nativeElement.innerText=='Behera') {
        ele.nativeElement.style.color='violet'
      }
      
    })
  }

  onClick5() {
    this.detail.forEach(ele => {
      ele.nativeElement.style.color='black'
      if(ele.nativeElement.innerText=='Tarai') {
        ele.nativeElement.style.color='blue'
      }
      
    })
  }
}
