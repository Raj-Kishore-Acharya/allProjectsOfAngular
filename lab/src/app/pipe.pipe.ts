import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(employ, searchItem) {
    if(!employ || !searchItem) {
      return employ
  }


  return employ.filter((emp)=> {
    return emp.Name.toLowerCase().indexOf(searchItem.toLowerCase()) !== -1
  })

  }

}
