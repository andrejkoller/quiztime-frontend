import { Component, OnDestroy, OnInit } from '@angular/core';
import { SettingsService } from '../../../services/settings.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  QuizCategory,
  QuizCategoryIcons,
  QuizCategoryNames,
} from '../../../models/quiz';
import { Subscription } from 'rxjs';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-category-selection',
  standalone: true,
  imports: [ReactiveFormsModule, LucideAngularModule],
  templateUrl: './category-selection.html',
})
export class CategorySelection implements OnInit, OnDestroy {
  categoryControl = new FormControl<QuizCategory | null>(null);
  private subscription = new Subscription();

  QuizCategory = QuizCategory;
  categoryNames = QuizCategoryNames;
  categoryIcons = QuizCategoryIcons;

  categories: QuizCategory[] = Object.values(QuizCategory as any).filter(
    (value) => typeof value === 'number',
  ) as QuizCategory[];

  constructor(protected settingsService: SettingsService) {}

  ngOnInit(): void {
    this.subscription = this.categoryControl.valueChanges.subscribe(
      (category) => {
        if (category !== null) {
          this.settingsService.setQuizCategory(category);
        }
      },
    );
  }

  selectCategory(category: QuizCategory) {
    this.categoryControl.setValue(category);
    this.settingsService.setQuizCategory(category);
    this.settingsService.nextStep();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
