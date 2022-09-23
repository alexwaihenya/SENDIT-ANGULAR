import { Pipe, PipeTransform } from '@angular/core';
import { IParcel } from 'src/app/intefaces';

@Pipe({
  name: 'searchparcel',
})
export class SearchparcelPipe implements PipeTransform {
  transform(value: IParcel[], id: number | string): IParcel[] {
    if (!value || id === '') {
      return value;
    }
    const filtered: IParcel[] = [];
    for (let item of value) {
      if ((item.parcel_id + '').includes(id.toString())) {
        filtered.push(item);
      }
    }
    return filtered;
  }
}
