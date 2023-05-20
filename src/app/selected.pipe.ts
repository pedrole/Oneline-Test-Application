import { Pipe, PipeTransform } from '@angular/core';
import { Quiz } from './models/quiz';

@Pipe({
  name: 'selected'
})
export class SelectedPipe implements PipeTransform {

  transform(value: Quiz, ...args: unknown[]): unknown {
      return value.options.find(o => o.selected)?.text;

    
  }

}
