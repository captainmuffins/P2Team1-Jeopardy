import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cleanjstring',
})
export class CleanjstringPipe implements PipeTransform {
  transform(value: String): any {
    return value.replace(/[^\w\s\'\-]/g, '');
    /*
      .replace(/(<([^>]+)>)/gi, '') // replace tags
      .replace(/['"]+/g, '') // replace double quotes
      .replace(/\\/g, ''); // replace backslashes
    */
  }
}
