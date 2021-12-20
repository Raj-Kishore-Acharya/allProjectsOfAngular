import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  fname:string = 'Raj Kishore';
  id= 420;
  company: string= 'Techno Elevate';
  content:string= 'magic';
  // img;
  // site;
  // name1;
  newMagic;
  // product;
  // colorName = 'classStyle';
  // styleName = {
  //   classColor : true,
  //   classStyle : true
  // }
  fontSize : '30px';
  styleObject = {
    fontSize : '20px',
    fontStyle : 'italic',
    color : 'orange'
  }


  // columns : number =2;


  constructor() {
    // setTimeout(() => {
    //   this.fname='chinu'
    // }, 4000);
   }
   

  ngOnInit(): void { 
    // let name = prompt('Do you Love dog or cat ?');
    // if(name=='dog') {
    //   this.img= 'https://media.istockphoto.com/photos/friends-red-cat-and-corgi-dog-walking-in-a-summer-meadow-under-the-picture-id1324099927?b=1&k=20&m=1324099927&s=170667a&w=0&h=_jRsZpMNYr--izDfsMtCB7MV97R-yMphyDTjcav85xc='
    // } else {
    //   this.img = 'https://cdn.pixabay.com/photo/2021/10/19/10/56/cat-6723256__340.jpg'
    // }

    //  this.name1= prompt('where do you want to go ?');
    // if(this.name1=='google') {
    //   this.site = 'https://www.google.com/';
    // } else if(this.name1=='facebook') {
    //   this.site= 'https://facebook.com/';
    // }
    // this.site= `https://${this.name1}.com`
   
  }
  // example() {
  //   return Math.random();
  // }

  // magic() {
  //   alert("no magic.. Shut up")
    
  // }
  

  // magic() {
  //   this.content= "no magic";
  // }


magic(event:any) {
    this.newMagic = event.target.value;
}
createMagic() {
  this.content= `${this.newMagic} magic hase been created`;
}


  // createProduct() {
  //   console.log(this.product)
  // }





}
