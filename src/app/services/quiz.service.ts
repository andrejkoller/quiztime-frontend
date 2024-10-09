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
      .get<any>(
        'https://opentdb.com/api.php?amount=20&category=9&difficulty=easy&type=boolean'
      )
      .subscribe((response) => {
        this.questions = response.results.map((q: any) => {
          return {
            question: q.question,
            answers: this.shuffleAnswers([
              ...q.incorrect_answers,
              q.correct_answer,
            ]),
            correctAnswer: q.correct_answer,
          };
        });
      });
  }

  shuffleAnswers(answers: string[]): string[] {
    return answers.sort(() => Math.random() - 0.5);
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      alert('Quiz completed!');
    }
  }
}
