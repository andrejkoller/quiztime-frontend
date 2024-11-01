import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'node:test/reporters';
import { catchError, map, Observable, of } from 'rxjs';
import { QuizCategory, QuizDifficulty } from '../models/quiz.model';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private baseUrl = 'https://opentdb.com/api.php';

  questions: any[] = [];
  answers: any[] = [];
  currentQuestionIndex: number = 1;

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  getQuestions(
    category: QuizCategory | undefined,
    difficulty: QuizDifficulty | undefined,
    amount: number
  ): Observable<any> {
    const url = `${this.baseUrl}?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;
    return this.http.get(url);
  }
}
