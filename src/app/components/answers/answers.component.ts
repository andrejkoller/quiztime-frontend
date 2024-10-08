import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-answers',
  standalone: true,
  imports: [MatCard, MatCardContent, NgFor],
  templateUrl: './answers.component.html',
  styleUrl: './answers.component.css',
})
export class AnswersComponent implements OnInit {

  constructor(protected quizService: QuizService) {}

  ngOnInit(): void {}
}
