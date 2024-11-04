import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { QuizCategory, QuizDifficulty } from '../models/quiz.model';
import { Router } from '@angular/router';
import { Player } from '../models/player.model';

@Injectable({
  providedIn: 'root',
})
export class GameSettingsService {
  playerAmount: number = 0;
  selectedCategory: QuizCategory | undefined;
  selectedDifficulty: QuizDifficulty | undefined;
  playerLiveAmount: number = 0;
  questionAmount: number = 0;
  playerPointAmount: number = 0;

  constructor() {}

  stepIndex: number = 0;

  private playersSubject = new BehaviorSubject<Player[]>([]);
  players$ = this.playersSubject.asObservable();

  private playerCapacitySubject = new BehaviorSubject<number>(1);
  playerCapacity$ = this.playerCapacitySubject.asObservable();

  private quizCategorySubject = new BehaviorSubject<QuizCategory | undefined>(
    QuizCategory.GeneralKnowledge
  );
  quizCategorySubject$ = this.quizCategorySubject.asObservable();

  private quizDifficultySubject = new BehaviorSubject<
    QuizDifficulty | undefined
  >(undefined);
  quizDifficultySubject$ = this.quizDifficultySubject.asObservable();

  private playerLiveCapacitySubject = new BehaviorSubject<number>(1);
  playerLiveCapacity$ = this.playerLiveCapacitySubject.asObservable();

  private questionCapacitySubject = new BehaviorSubject<number>(1);
  questionCapacity$ = this.questionCapacitySubject.asObservable();

  private playerSubject = new BehaviorSubject<string>('');
  player$ = this.playerSubject.asObservable();

  private playerPointCapacitySubject = new BehaviorSubject<number>(0);
  playerPointCapacity$ = this.playerPointCapacitySubject.asObservable();

  setPlayers(players: Player[]) {
    this.playersSubject.next(players);
  }

  getPlayers(): Player[] {
    return this.playersSubject.getValue();
  }

  /* Player Capacity */
  setPlayerCapacity(value: number) {
    this.playerCapacitySubject.next(value);
  }

  getPlayerCapacity(): number {
    return this.playerCapacitySubject.getValue();
  }

  /* Quiz Category */
  setQuizCategory(category: QuizCategory) {
    this.quizCategorySubject.next(category);
  }

  getQuizCategory(): QuizCategory | undefined {
    return this.quizCategorySubject.value;
  }

  /* Quiz Difficulty */
  setQuizDifficulty(difficulty: QuizDifficulty) {
    this.quizDifficultySubject.next(difficulty);
  }

  getQuizDifficulty(): QuizDifficulty | undefined {
    return this.quizDifficultySubject.value;
  }

  /* Player Live Capacity */
  setPlayerLiveCapacity(value: number) {
    this.playerLiveCapacitySubject.next(value);
  }

  getPlayerLiveCapacity(): number {
    return this.playerLiveCapacitySubject.getValue();
  }

  /* Questions Capacity */
  setQuestionCapacity(value: number) {
    this.questionCapacitySubject.next(value);
  }

  getQuestionCapacity(): number {
    return this.questionCapacitySubject.getValue();
  }

  /* Player Points */
  setPlayerPoints(value: number) {
    this.playerPointCapacitySubject.next(value);
  }

  getPlayerPoints(): number {
    return this.playerPointCapacitySubject.getValue();
  }

  /* Game Control */
  nextStep() {
    this.stepIndex++;
  }

  prevStep() {
    this.stepIndex--;
  }
}
