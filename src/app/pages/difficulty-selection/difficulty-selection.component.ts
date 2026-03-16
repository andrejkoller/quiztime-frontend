import { Component, OnDestroy, OnInit } from '@angular/core';
import { QuizDifficulty } from '../../models/quiz.model';
import { NgClass } from '@angular/common';
import { SettingsService } from '../../services/settings.service';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-difficulty-selection',
  standalone: true,
  imports: [NgClass],
  templateUrl: './difficulty-selection.component.html',
  styleUrl: './difficulty-selection.component.css',
})
export class DifficultySelectionComponent implements OnInit, OnDestroy {
  difficultyControl = new FormControl<QuizDifficulty | null>(null);
  private subscription = new Subscription();

  QuizDifficulty = QuizDifficulty;

  constructor(protected settingsService: SettingsService) {}

  ngOnInit(): void {
    this.subscription = this.difficultyControl.valueChanges.subscribe(
      (difficulty) => {
        if (difficulty !== null) {
          this.settingsService.setQuizDifficulty(difficulty);
        }
      },
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
