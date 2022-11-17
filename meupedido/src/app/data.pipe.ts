import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'DATA'
})
export class DATAPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
