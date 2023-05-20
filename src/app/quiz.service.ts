import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quiz } from './models/quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http : HttpClient) { }


  getQuestionJson() : Observable<Quiz[]>{
    return this.http.get<Quiz[]>("assets/quiz-answers.json");
  }
}
