import { Pipe, PipeTransform } from '@angular/core';
import { Quiz } from './models/quiz';

@Pipe({
  name: 'corrected'
})
export class CorrectedPipe implements PipeTransform {

  transform(value: Quiz, ...args: unknown[]): unknown {
    return value.options.find(o => o.correct)?.text;


  }

}
