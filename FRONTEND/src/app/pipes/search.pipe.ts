import { Pipe, PipeTransform } from '@angular/core';
import { IOrder } from '../intefaces';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: IOrder, filterText: string): IOrder {
    if(value.length=== 0 || filterText ==='' ){
      return value
    }
    const filtered:IOrder[]=[]
    for(let item of value){
      if(item.senderName.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase())!==-1){
        filtered.push(item)
      }
    }
    return filtered;
  }

}
