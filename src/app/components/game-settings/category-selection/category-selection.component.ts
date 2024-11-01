import { Component, OnDestroy, OnInit } from '@angular/core';
import { GameSettingsService } from '../../../services/game-settings.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { QuizCategory } from '../../../models/quiz.model';
import { NgClass } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-category-selection',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './category-selection.component.html',
  styleUrl: './category-selection.component.css',
})
export class CategorySelectionComponent implements OnInit, OnDestroy {
  categoryControl = new FormControl<QuizCategory | null>(null);
  private subscription = new Subscription();

  QuizCategory = QuizCategory;

  constructor(protected gameSettingsService: GameSettingsService) {}

  ngOnInit(): void {
    this.subscription = this.categoryControl.valueChanges.subscribe(
      (category) => {
        if (category !== null) {
          this.gameSettingsService.setQuizCategory(category);
        }
      }
    );
  }

  selectCategory(category: QuizCategory) {
    this.categoryControl.setValue(category);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
