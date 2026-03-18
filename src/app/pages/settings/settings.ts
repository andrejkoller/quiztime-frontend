import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DifficultySelection } from './difficulty-selection/difficulty-selection';
import { CategorySelection } from './category-selection/category-selection';
import { SettingsService } from '../../services/settings.service';
import { Subscription } from 'rxjs';
import { QuizCategory, QuizDifficulty } from '../../models/quiz';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [FormsModule, DifficultySelection, CategorySelection],
  templateUrl: './settings.html',
})
export class Settings implements OnInit, OnDestroy {
  playerCapacity: number | undefined = 1;
  quizCategory: QuizCategory | undefined = QuizCategory.GeneralKnowledge;
  quizDifficulty: QuizDifficulty | undefined = QuizDifficulty.Easy;
  questionCapacity: number | undefined = 1;

  private playerSubscription: Subscription = new Subscription();
  private categorySubscription: Subscription = new Subscription();
  private difficultySubscription: Subscription = new Subscription();
  private questionSubscription: Subscription = new Subscription();

  constructor(
    private router: Router,
    protected settingsService: SettingsService,
  ) {}

  ngOnInit(): void {
    this.playerSubscription = this.settingsService.playerCapacity$.subscribe(
      (capacity) => {
        this.playerCapacity = capacity;
      },
    );

    this.categorySubscription =
      this.settingsService.quizCategorySubject$.subscribe((category) => {
        this.quizCategory = category;
      });

    this.difficultySubscription =
      this.settingsService.quizDifficultySubject$.subscribe((difficulty) => {
        this.quizDifficulty = difficulty;
      });

    this.questionSubscription =
      this.settingsService.questionCapacity$.subscribe(
        (question) => (this.questionCapacity = question),
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
    this.questionSubscription.unsubscribe();
  }
}
