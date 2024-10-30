import { Component, OnDestroy, OnInit } from '@angular/core';
import { GameSettingsService } from '../../../services/game-settings.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { QuizCategory } from '../../../models/quiz.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-category-selection',
  standalone: true,
  imports: [NgClass, ReactiveFormsModule],
  templateUrl: './category-selection.component.html',
  styleUrl: './category-selection.component.css',
})
export class CategorySelectionComponent implements OnInit {
  categoryControl = new FormControl<QuizCategory | null>(null);
  QuizCategory = QuizCategory;

  constructor(protected gameSettingsService: GameSettingsService) {}

  ngOnInit(): void {
    this.categoryControl.valueChanges.subscribe((category) => {
      if (category !== null) {
        this.gameSettingsService.setQuizCategory(category);
      }
    });
  }

  selectCategory(category: QuizCategory) {
    this.categoryControl.setValue(category);
  }
}
