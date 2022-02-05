import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(patients: any , searchItem: any) {
    if(!patients || !searchItem) {
      return patients
    }

    return patients.filter((ele:any)=> {
      return ele.name.toLowerCase().indexOf(searchItem.toLowerCase()) !== -1
    })
  }

}
