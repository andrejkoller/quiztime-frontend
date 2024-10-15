import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { QuizCategory, QuizDifficulty } from '../models/quiz.model';

@Injectable({
  providedIn: 'root',
})
export class GameSettingsService {
  private playerCapacitySubject = new BehaviorSubject<number>(1);
  playerCapacity$ = this.playerCapacitySubject.asObservable();

  private quizCategorySubject = new BehaviorSubject<QuizCategory | null>(null);
  quizCategorySubject$ = this.quizCategorySubject.asObservable();

  private quizDifficultySubject = new BehaviorSubject<QuizDifficulty | null>(
    null
  );
  quizDifficultySubject$ = this.quizDifficultySubject.asObservable();

  setPlayerCapacity(value: number) {
    this.playerCapacitySubject.next(value);
  }

  getPlayerCapacity(): number {
    return this.playerCapacitySubject.getValue();
  }

  setQuizCategory(category: QuizCategory) {
    this.quizCategorySubject.next(category);
  }

  getQuizCategory(): QuizCategory | null {
    return this.quizCategorySubject.value;
  }

  setQuizDifficulty(difficulty: QuizDifficulty) {
    this.quizDifficultySubject.next(difficulty);
  }

  getQuizDifficulty(): QuizDifficulty | null {
    return this.quizDifficultySubject.value;
  }
}
