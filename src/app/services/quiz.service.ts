import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { QuizCategory, QuizDifficulty } from '../models/quiz';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private readonly BASE_URL = 'https://opentdb.com/api.php';

  constructor(private http: HttpClient) {}

  getQuestions(
    category: QuizCategory | undefined,
    difficulty: QuizDifficulty | undefined,
    amount: number,
  ): Observable<any> {
    const url = `${this.BASE_URL}?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;
    return this.http.get(url);
  }
}
