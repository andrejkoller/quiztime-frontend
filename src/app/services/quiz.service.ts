import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  questions: any[] = [];
  answers: any[] = [];
  currentQuestionIndex: number = 1;

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  fetchQuestions() {
    this.http
      .get(
        'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=boolean'
      )
      .subscribe(
        (response: any) => {
          this.questions = response.results;
        },
        (error: any) => {
          const errorMessage =
            'Failed to fetch trivia questions. Please try again later.';
          this.toastr.error(errorMessage);
          console.log(error);
        }
      );
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      alert('Quiz completed!');
    }
  }
}
