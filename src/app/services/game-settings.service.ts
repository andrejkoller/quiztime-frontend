import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { QuizCategory, QuizDifficulty } from '../models/quiz.model';

@Injectable({
  providedIn: 'root',
})
export class GameSettingsService {
  constructor() {}

  stepIndex: number = 0;

  private playerCapacitySubject = new BehaviorSubject<number>(0);
  playerCapacity$ = this.playerCapacitySubject.asObservable();

  private quizCategorySubject = new BehaviorSubject<QuizCategory | undefined>(
    undefined
  );
  quizCategorySubject$ = this.quizCategorySubject.asObservable();

  private quizDifficultySubject = new BehaviorSubject<
    QuizDifficulty | undefined
  >(undefined);
  quizDifficultySubject$ = this.quizDifficultySubject.asObservable();

  private playerLiveCapacitySubject = new BehaviorSubject<number>(0);
  playerLiveCapacity$ = this.playerLiveCapacitySubject.asObservable();

  private questionCapacitySubject = new BehaviorSubject<number>(0);
  questionCapacity$ = this.questionCapacitySubject.asObservable();

  private playerPointCapacitySubject = new BehaviorSubject<number>(0);
  playerPointCapacity$ = this.playerPointCapacitySubject.asObservable();

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

  getQuizDifficulty(): QuizDifficulty | undefined {
    return this.quizDifficultySubject.value;
  }

  setPlayerLiveCapacity(value: number) {
    this.playerLiveCapacitySubject.next(value);
  }

  getPlayerLiveCapacity(): number {
    return this.playerLiveCapacitySubject.getValue();
  }

  setQuestionCapacity(value: number) {
    this.questionCapacitySubject.next(value);
  }

  getQuestionCapacity(): number {
    return this.questionCapacitySubject.getValue();
  }

  setPlayerPoints(value: number) {
    this.playerPointCapacitySubject.next(value);
  }

  getPlayerPoints(): number {
    return this.playerPointCapacitySubject.getValue();
  }

  nextStep() {
    this.stepIndex++;
  }

  prevStep() {
    this.stepIndex--;
  }
}
