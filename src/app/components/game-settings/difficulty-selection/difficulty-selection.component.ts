import { Component, OnInit } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { Quiz_Difficulty } from '../../../models/quiz.model';

@Component({
  selector: 'app-difficulty-selection',
  standalone: true,
  imports: [MatCard, MatCardContent],
  templateUrl: './difficulty-selection.component.html',
  styleUrl: './difficulty-selection.component.css',
})
export class DifficultySelectionComponent implements OnInit {
  quizDifficultyTypes = Object.values(Quiz_Difficulty).filter(
    (value) => typeof value === 'string'
  );

  constructor() {}

  ngOnInit(): void {}
}
