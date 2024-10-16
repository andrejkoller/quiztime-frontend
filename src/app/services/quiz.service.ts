import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'node:test/reporters';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  apiURL = 'https://opentdb.com/api.php?amount=20';

  questions: any[] = [];
  answers: any[] = [];
  currentQuestionIndex: number = 1;

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  fetchQuestions() {
    this.http
      .get<{ results: any[] }>(this.apiURL)
      .pipe(
        map((response: { results: any[] }) => response.results),
        catchError((error) => {
          const errorMessage = 'Could not load quiz. Please try again later.';
          this.toastr.error(errorMessage);
          return of([]);
        })
      )
      .subscribe((results: any[]) => {
        this.questions = results.map((q: any) => ({
          question: q.question,
          answers: this.shuffleAnswers([
            ...q.incorrect_answers,
            q.correct_answer,
          ]),
          correctAnswer: q.correct_answer,
        }));
      });
  }

  shuffleAnswers(answers: string[]): string[] {
    return answers.sort(() => Math.random() - 0.5);
  }
}
