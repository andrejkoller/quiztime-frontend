import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { QuizCategory, QuizDifficulty } from '../models/quiz.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GameSettingsService {
  constructor(private router: Router) {}
  
  playerCapacity: number | undefined;
  stepIndex: number = 0;

  private playerCapacitySubject = new BehaviorSubject<number>(1);
  playerCapacity$ = this.playerCapacitySubject.asObservable();

  private quizCategorySubject = new BehaviorSubject<QuizCategory | undefined>(QuizCategory.GeneralKnowledge);
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

  getQuizCategory(): QuizCategory | undefined {
    return this.quizCategorySubject.value;
  }

  setQuizDifficulty(difficulty: QuizDifficulty) {
    this.quizDifficultySubject.next(difficulty);
  }

  getQuizDifficulty(): QuizDifficulty | null {
    return this.quizDifficultySubject.value;
  }

  nextStep() {
    this.stepIndex++;
  }

  prevStep() {
    this.stepIndex--;
  }

  startGame() {
    this.router.navigate(['/playground']);
  }
}
