import { Component, Input, OnInit } from '@angular/core';
import { Quiz } from '../models/quiz';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {


  @Input() questions: Quiz[] | undefined;

  mode = 'stats';
  result: string = ''
  correctedAnswers = 0;

  ngOnInit(): void {
    this.questions?.forEach(q => {
      
      let option = q.options.find(o => o.selected && o.correct)
      let selected = q.options.find(o => o.selected)?.selected 
      console.log(selected || '');
      
      if (option)
        this.correctedAnswers++;


    })
    console.log(this.correctedAnswers);
    

    if (this.correctedAnswers == this.questions?.length)
      this.result = "Congratulations, you have passed!";
    else
      this.result = "Sorry, You have Failed!"
  }

  onStats() {
    this.mode = 'stats';
  }

  onReview() {
    this.mode = 'review';
  }

}
