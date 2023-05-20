import { Pipe, PipeTransform } from '@angular/core';
import { Quiz } from './models/quiz';

@Pipe({
  name: 'points'
})
export class PointsPipe implements PipeTransform {

  transform(value: Quiz, ...args: unknown[]): unknown {
    return value.options.find(o => o.correct && o.selected) ? 5 : 0;


  }

}
