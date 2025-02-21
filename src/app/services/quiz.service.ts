import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { QuizCategory, QuizDifficulty } from '../models/quiz.model';
import { Player } from '../models/player.model';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private baseUrl = 'https://opentdb.com/api.php';

  constructor(private http: HttpClient) {}

  getQuestions(
    category: QuizCategory | undefined,
    difficulty: QuizDifficulty | undefined,
    amount: number
  ): Observable<any> {
    const url = `${this.baseUrl}?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;
    return this.http.get(url);
  }
}
