import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cleanjstring',
})
export class CleanjstringPipe implements PipeTransform {
  transform(value: String): any {
    return value
      .replace(/<\/?[^>]+(>|$)/g, '')
      .replace(/[^\w\s\'\-]/g, '')
      .trim();
  }
}
