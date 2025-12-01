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
    NgIf,
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
  playerCapacity: number | undefined = 1;
  quizCategory: QuizCategory | undefined = QuizCategory.GeneralKnowledge;
  quizDifficulty: QuizDifficulty | undefined = QuizDifficulty.Easy;
  playerLiveCapacity: number | undefined = 1;
  questionCapacity: number | undefined = 1;

  private playerSubscription: Subscription = new Subscription();
  private categorySubscription: Subscription = new Subscription();
  private difficultySubscription: Subscription = new Subscription();
  private playerLiveSubscription: Subscription = new Subscription();
  private questionSubscription: Subscription = new Subscription();

  constructor(
    private router: Router,
    protected gameSettingsService: GameSettingsService
  ) {}

  ngOnInit(): void {
    this.playerSubscription =
      this.gameSettingsService.playerCapacity$.subscribe((capacity) => {
        this.playerCapacity = capacity;
      });

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

    this.playerLiveSubscription =
      this.gameSettingsService.playerLiveCapacity$.subscribe((capacity) => {
        this.playerLiveCapacity = capacity;
      });

    this.questionSubscription =
      this.gameSettingsService.questionCapacity$.subscribe(
        (question) => (this.questionCapacity = question)
      );
  }

  exitSettings() {
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }

  ngOnDestroy(): void {
    this.playerSubscription.unsubscribe();
    this.categorySubscription.unsubscribe();
    this.difficultySubscription.unsubscribe();
    this.playerLiveSubscription.unsubscribe();
    this.questionSubscription.unsubscribe();
  }
}
