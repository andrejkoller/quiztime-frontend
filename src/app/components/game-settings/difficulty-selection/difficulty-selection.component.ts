import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { QuizDifficulty } from '../../../models/quiz.model';
import { NgClass } from '@angular/common';
import { GameSettingsService } from '../../../services/game-settings.service';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-difficulty-selection',
  standalone: true,
  imports: [MatCard, MatCardContent, NgClass],
  templateUrl: './difficulty-selection.component.html',
  styleUrl: './difficulty-selection.component.css',
})
export class DifficultySelectionComponent implements OnInit, OnDestroy {
  difficultyControl = new FormControl<QuizDifficulty | null>(null);
  private subscription = new Subscription();

  QuizDifficulty = QuizDifficulty;

  constructor(protected gameSettingsService: GameSettingsService) {}

  ngOnInit(): void {
    this.subscription = this.difficultyControl.valueChanges.subscribe(
      (difficulty) => {
        if (difficulty !== null) {
          this.gameSettingsService.setQuizDifficulty(difficulty);
        }
      }
    );
  }

  selectDifficulty(difficulty: QuizDifficulty) {
    this.difficultyControl.setValue(difficulty);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
