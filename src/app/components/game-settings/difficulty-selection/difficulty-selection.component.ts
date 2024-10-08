import { Component, OnInit } from '@angular/core';
import { Question_Difficulty } from '../../../models/question.model';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'app-difficulty-selection',
  standalone: true,
  imports: [MatCard, MatCardContent],
  templateUrl: './difficulty-selection.component.html',
  styleUrl: './difficulty-selection.component.css',
})
export class DifficultySelectionComponent implements OnInit {
  quizDifficultyTypes = Object.values(Question_Difficulty).filter(
    (value) => typeof value === 'string'
  );

  constructor() {}

  ngOnInit(): void {}
}
