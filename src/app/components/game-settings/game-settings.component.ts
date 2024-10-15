import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { Router, RouterLink } from '@angular/router';
import { NgFor, NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlayerCountComponent } from './player-count/player-count.component';
import { DifficultySelectionComponent } from './difficulty-selection/difficulty-selection.component';
import { PlayerLivesComponent } from './player-lives/player-lives.component';
import { RoundsCountComponent } from './rounds-count/rounds-count.component';
import { PlayerNamesInputComponent } from './player-names-input/player-names-input.component';
import { CategorySelectionComponent } from './category-selection/category-selection.component';
import { GameSettingsService } from '../../services/game-settings.service';
import { Subscription } from 'rxjs';
import { QuizCategory, QuizDifficulty } from '../../models/quiz.model';

@Component({
  selector: 'app-game-settings',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    RouterLink,
    NgIf,
    NgFor,
    NgForOf,
    FormsModule,
    PlayerCountComponent,
    DifficultySelectionComponent,
    PlayerLivesComponent,
    RoundsCountComponent,
    PlayerNamesInputComponent,
    CategorySelectionComponent,
  ],
  templateUrl: './game-settings.component.html',
  styleUrl: './game-settings.component.css',
})
export class GameSettingsComponent implements OnInit, OnDestroy {
  playerCapacity: number | undefined;
  quizCategory: QuizCategory | null = QuizCategory.Art;
  quizDifficulty: QuizDifficulty | null = QuizDifficulty.Easy;

  private subscription: Subscription = new Subscription();
  private categorySubscription: Subscription = new Subscription();
  private difficultySubscription: Subscription = new Subscription();

  stepIndex: number = 0;

  constructor(
    private router: Router,
    private gameSettingsService: GameSettingsService
  ) {}

  ngOnInit(): void {
    this.subscription = this.gameSettingsService.playerCapacity$.subscribe(
      (capacity) => {
        this.playerCapacity = capacity;
      }
    );

    this.categorySubscription =
      this.gameSettingsService.quizCategorySubject$.subscribe((category) => {
        this.quizCategory = category;
      });

    this.difficultySubscription =
      this.gameSettingsService.quizDifficultySubject$.subscribe(
        (difficulty) => {
          this.quizDifficulty = difficulty;
        }
      );
  }

  goBackToHome() {
    this.router.navigate(['/']);
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.categorySubscription.unsubscribe();
    this.difficultySubscription.unsubscribe();
  }
}
