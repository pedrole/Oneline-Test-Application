import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { Quiz } from '../models/quiz';
import { QuizService } from '../quiz.service';
import { Option } from '../models/option';
import { NumberSymbol } from '@angular/common';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  currentQuestion: Quiz | undefined;
  currentIndex: number = 0;
  selectedOption: Option | undefined;
  mode = 'quiz'
  isFinished: boolean = false;
  name: string | null = '';
  score: number = 0;

  questions: Quiz[] = [];
  onItemChange(option: Option) {
    //console.log(option);
    //this.selectedOption = option;
    // this.currentQuestion?.options.find(o => o == option);
    this.currentQuestion?.options.forEach(o => o.selected = false)
    option.selected = true;
    console.log(this.currentQuestion);

  }

  constructor(private quizService: QuizService) {

  }

  finish() {
    this.mode = 'result'

  }

  getQuestions() {
    this.quizService.getQuestionJson().subscribe(
      questions => {
        this.questions = questions;
        questions.length
        //questions[0].questionText
        this.currentQuestion = questions[this.currentIndex];


      }
    );
  }
  nextQuestion() {


    if (this.currentQuestion) {
      this.currentQuestion.answered = true;

      if( this.currentQuestion.options.filter(o => o.selected && o.correct).length)
        this.score = this.score +5;
    }


    if (this.currentIndex == this.questions.length - 1) {
      this.isFinished = true;
      this.finish();

    } else {

      //console.log(this.currentIndex);


      //this.currentIndex++;
      this.currentQuestion = this.questions[++this.currentIndex];
    }


  }




  ngOnInit(): void {
    this.getQuestions();
    this.name = localStorage.getItem('name');
  }

}
