import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(newsArt , searchItem) {
    if(!newsArt || !searchItem) {
      return newsArt
  }

  return newsArt.filter((emp)=> {
    return emp.description.toLowerCase().indexOf(searchItem.toLowerCase()) !== -1
  })

}

}
