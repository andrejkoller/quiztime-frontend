import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  QuizCategory,
  QuizCategoryIcons,
  QuizCategoryNames,
  QuizDifficulty,
  QuizDifficultyNames,
} from '../../../models/quiz';
import { SettingsService } from '../../../services/settings.service';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-difficulty-selection',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './difficulty-selection.html',
})
export class DifficultySelection implements OnInit, OnDestroy {
  difficultyControl = new FormControl<QuizDifficulty | null>(null);
  private subscription = new Subscription();

  difficultyNames: typeof QuizDifficultyNames = QuizDifficultyNames;
  difficulties: QuizDifficulty[] = Object.values(QuizDifficulty as any);

  category: QuizCategory | undefined;
  categoryNames: typeof QuizCategoryNames = QuizCategoryNames;
  categoryIcons: typeof QuizCategoryIcons = QuizCategoryIcons;

  constructor(protected settingsService: SettingsService) {}

  ngOnInit(): void {
    this.subscription = this.difficultyControl.valueChanges.subscribe(
      (difficulty) => {
        if (difficulty !== null) {
          this.settingsService.setQuizDifficulty(difficulty);
        }
      },
    );

    this.category = this.settingsService.getQuizCategory();
  }

  selectDifficulty(difficulty: QuizDifficulty) {
    this.difficultyControl.setValue(difficulty);
    this.settingsService.setQuizDifficulty(difficulty);
    this.settingsService.nextStep();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
