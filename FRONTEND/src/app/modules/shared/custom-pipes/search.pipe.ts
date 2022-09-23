import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from 'src/app/intefaces/user';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(value: IUser[], email: string): IUser[] {
    if (!value || email === '') {
      return value;
    }
    const filtered: IUser[] = [];
    for (let user of value) {
      if (user.email.toLowerCase().includes(email.toLowerCase())) {
        filtered.push(user);
      }
    }
    return filtered;
  }
}
